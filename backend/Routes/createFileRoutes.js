const express = require("express");


const router = express.Router();

const {createFile, createFileInside, createFileOutside} = require("../Controllers/createFileControllers");


router.use("/createFile", createFile)
router.use("/createFileInside", createFileInside)
router.use("/createFileOutside", createFileOutside)
module.exports = router;




