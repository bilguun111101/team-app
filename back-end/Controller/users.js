const User = require("../models/users");

exports.getUserData = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ data: "get request is coming!" });
}
