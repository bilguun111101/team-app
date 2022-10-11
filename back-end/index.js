const data = require("./data.json");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
  res.status(200).json(data);
});

app.post("/", (req, res) => {
  res.send("Post request is successfully");
});

app.put("/", (req, res) => {
  res.send("Put equest is successfully");
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  // const deleteApi = _.find(data.data, { id: id });
  // res.status(200).send(deleteApi);
  // if (deleteApi) {
  //   const dataApi = _.filter(data.data, (el, idx) => el.id !== id);
  // }
});


app.listen(port, () => {
  console.log(`localhost:${port}/users`);
});