const User = require('../models/User');
const Note = require('../models/Note');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

// @desc Get all users
// @route GET /users
// @access private

const getAllUsers = asyncHandler(async (req, res) => {});

// @desc create new user
// @route POST /users
// @access private
const createNewUser = asyncHandler(async (req, res) => {});

// @desc update a user
// @route PATCH /users
// @access private
const updateUser = asyncHandler(async (req, res) => {});

// @desc delete a user
// @route DELETE /users
// @access private
const deleteUser = asyncHandler(async (req, res) => {});
