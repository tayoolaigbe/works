const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('./models/User');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.CONNECTION_URL);

app.post('/register', async (req, res) => {
	const password = bcrypt.hashSync(req.body.password, saltRounds);
	const { username } = req.body;
	try {
		const userDoc = new User({
			username,
			password,
		});
		await User.save();
		res.json(userDoc);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
});
app.listen(4000);
