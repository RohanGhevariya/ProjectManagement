require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = "mongodb://localhost:27017/";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/member");
const task = require("./routes/task");

app.use("/api", routes);
app.use("/api/task/", task);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
