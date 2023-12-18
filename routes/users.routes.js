const express = require('express');
const usersSqlController = require("../controllers/users.controller");
const usersSqlRouter = express.Router();

usersSqlRouter.post("/addUser", usersSqlController.createUser)

usersSqlRouter.post("/login", usersSqlController.login)


module.exports = usersSqlRouter;