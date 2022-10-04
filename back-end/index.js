const axios = require("axios");

const data = require("./data.json");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 8000;

app.get("/users", (req, res) => {
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`success`);
});
