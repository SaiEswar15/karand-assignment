const express = require("express");

const router = express.Router();

const {search} = require("../Controllers/searchControllers");


router.use("/item", search)

module.exports = router;