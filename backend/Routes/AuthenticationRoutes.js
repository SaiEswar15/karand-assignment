const express = require("express");

const router = express.Router();

const {signup} = require("../Controllers/AuthorizationControllers");
const {get} = require("../Controllers/AuthorizationControllers");
const {login} = require("../Controllers/AuthorizationControllers");

router.use("/signup", signup)
router.use("/get", get)
router.use("/login", login)

module.exports = router;