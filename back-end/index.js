const data = require("./data.json");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());


// Posts Section ******^^^^^^^********

const postsRouter = require("./Route/post");
app.use("/posts", postsRouter);



// ------------- Posts Section --------------- //

app.listen(port, () => {
  console.log(`localhost:${port}/users`);
});