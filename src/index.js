const express = require("express");

const usercontroller = require("./controllers/user.controller");

const app = express();

app.use("/users",usercontroller);


app.use(express.json());


module.exports = app;
