const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	username: { type: String, required: true, min: 4, unique: true },
	username: { type: String, required: true },
});
