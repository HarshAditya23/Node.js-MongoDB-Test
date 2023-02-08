const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config({
	override: true
});

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect(URI).then(() => {
	console.log('Database connection successful.');
}).catch((err) => {
	console.log('Database connection unsuccessful.');
});

const dysdata = new mongoose.Schema({
	title: String,
	name: String,
	contact: Number
});

const connect = mongoose.model('connect', dysdata);

app.get('/', (req, res) => {
	res.send("API is running..");
});

app.get('/dataresources/:title', (req, res) => {
	dysdata.findOne({
		title: req.params.title
	}, (err, d_data) => {
		if (err) {
			return res.status(400).send(err);
		} else
			res.send(d_data);
	});
});

app.listen(PORT, () => {
	console.log(`Server is up and running at http://127.0.0.1:${PORT}`);
});
