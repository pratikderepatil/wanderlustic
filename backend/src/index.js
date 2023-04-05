require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const connect = require("./congif/db");
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const userRouter = require("./routes/user.route");

mongoose.set("strictQuery", false);

app.use("/travel", userRouter);

app.get("/", (req, res) => {
	res.send("Welcome to Wanderlustic API's");
});

app.listen(PORT, async () => {
	connect();
	console.log(`Listening at http://localhost:${PORT}`);
});
