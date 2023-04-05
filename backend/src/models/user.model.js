const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
	{
		fullname: { type: String, required: true },

		email: {
			type: String,
			unique: false,
			required: true,
		},

		destination: {
			type: String,
			enum: ["India", "Europe", "Africa"],
			required: true,
		},

		numberOfTravellers: {
			type: Number,
			required: true,
		},

		budget: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const UserModel = model("user", UserSchema);

module.exports = UserModel;
