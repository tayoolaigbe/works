const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.CONNECTION_URL);

app.post('/register', (req, res) => {
	const { username, password } = req.body;
	res.json({ requestData: { username, password } });
});
app.listen(4000);
