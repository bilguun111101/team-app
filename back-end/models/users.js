const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    firstName: String,
    email: String,
})

const UserModel = model("User", UserSchema);

module.exports = UserModel;