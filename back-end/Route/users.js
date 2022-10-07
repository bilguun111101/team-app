import express from "express";
const router = express.Router();
import { getUsers } from "../Controller/users";

router.get("/", getUsers);

module.exports = router;
