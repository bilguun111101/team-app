const express = require("express");
const router = express.Router();
const { getUsers } = require("../Controller/users");

router.get("/", getUsers);

module.exports = router;
