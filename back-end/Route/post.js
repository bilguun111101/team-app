const express = require("express");
const router = express.Router();


// "/" Section ^^^^^^^-------^^^^^^^

const { SetPostDatas } = require("../Controller/post");
router.get("/", SetPostDatas);

// ------------- "/" Section --------------

// One data of post ++++++++++++++++++++++++++

const { PostDataOfPost } = require("../Controller/post");
router.get("/:id", PostDataOfPost);

// --------------- One data of post --------------- //


module.exports = router;