require("dotenv").config();

const express = require("express");

const UserModel = require("../models/user.model");

const app = express.Router();

app.get("/:id", async (req, res) => {
	const { id } = req.params;
	console.log(id);
	try {
		const user = await UserModel.findById(id);
		return res.status(201).send(user);
	} catch (e) {
		return res.status(400).send(e);
	}
});

app.post("/confirmBooking", async (req, res) => {
	let { budget, destination, email, fullname, numberOfTravellers } = req.body;

	try {
		let newUser = new UserModel({
			budget,
			destination,
			email,
			fullname,
			numberOfTravellers,
		});
		await newUser.save();
		return res.status(201).send(newUser._id);
	} catch (e) {
		return res.status(500).send(e.message);
	}
});

module.exports = app;
