const User = require('../models/User');
const Note = require('../models/Note');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const { findOne } = require('../models/Note');

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

	// Check for duuplicates
	const duplicate = await findOne({ username }).lean().exec();
});

// @desc update a user
// @route PATCH /users
// @access private
const updateUser = asyncHandler(async (req, res) => {});

// @desc delete a user
// @route DELETE /users
// @access private
const deleteUser = asyncHandler(async (req, res) => {});

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
