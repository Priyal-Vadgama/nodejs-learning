const http = require("http");
const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routes/user");

mongoose
  .connect("mongodb://127.0.0.1:27017/nodejs-learning")
  .then(() => console.log("Mongodb connected.."))
  .catch(() => console.log("Error in mongo connnection.."));

const app = express();
app.use(express.urlencoded({ extended: true }));

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("user", UserSchema);

app.use("/user", userRouter);

const server = http.createServer(app);

server.listen(8000, () => console.log("Server started..."));
