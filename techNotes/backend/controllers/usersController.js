const User = require('../models/User');
const Note = require('../models/Note');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const { findOne, rawListeners } = require('../models/Note');

// @desc Get all users
// @route GET /users
// @access private

const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find().select('-password').lean();
	if (!users) {
		return res.status(400).json({ message: 'No Users Found' });
	}
	res.json(users);
});

// @desc create new user
// @route POST /users
// @access private
const createNewUser = asyncHandler(async (req, res) => {
	const { username, password, roles } = req.body;

	// Confirm data
	if (!username || !password || !Array.isArray(roles) || !roles.length) {
		return res.status(400).json({ message: 'All fields are Required' });
	}

	// Check for duplicates
	const duplicate = await findOne({ username }).lean().exec();

	if (duplicate) {
		return res.status(409).json({ message: 'Username already exist' });
	}

	// Hash password
	const hashedPassword = await bcrypt.hash(password, 10); //salt rounds
	const userObject = { username, password: hashedPassword, roles };

	// create and store new user
	const user = await User.create(userObject);

	if (user) {
		//created
		res.status(201).json({ message: `New user ${username} create` });
	} else {
		res.status(400).json({ message: 'Invalid user data received' });
	}
});

// @desc update a user
// @route PATCH /users
// @access private
const updateUser = asyncHandler(async (req, res) => {
	const { id, username, roles, active, password } = req.body;

	//Confirm data
	if (
		!id ||
		!username ||
		!password ||
		!Array.isArray(roles) ||
		!roles.length ||
		typeof active !== 'boolean'
	) {
		return res.status(400).json({ message: 'All fields required' });
	}

	const user = await User.findById(id).exec();

	if (!user) {
		return res.status(400).json({ message: 'User not found!' });
	}

	//Check for duplicate
	const duplicate = await User.findOne({ username }).lean().exec();
	// Allow updates to the original user
	if (duplicate && duplicate?._id.toString() !== id) {
		return res.status(409).json({ message: 'Duplicate Username' });
	}

	user.username = username;
	user.roles = roles;
	user.active = active;

	if (password) {
		//Hash password
		user.password = await bcrypt.hash(password, 10); //salt rounds
	}
	const updatedUser = await user.save();

	res.json({ message: `${updatedUser.username} updated` });
});

// @desc delete a user
// @route DELETE /users
// @access private
const deleteUser = asyncHandler(async (req, res) => {});

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
