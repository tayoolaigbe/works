const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const User = require('./models/User');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.CONNECTION_URL);

app.post('/register', async (req, res) => {
	const { username, password } = req.body;
	try {
		const userDoc = await User.create({ username, password });
		res.json(userDoc);
	} catch (error) {
		res.status(400).json(e);
	}
});
app.listen(4000);
