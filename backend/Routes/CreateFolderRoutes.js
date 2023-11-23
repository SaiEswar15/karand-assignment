const express = require("express");


const router = express.Router();

const {createFolder, createFolderInside, createFolderOutside} = require("../Controllers/CreateFolderControllers");

router.use("/createFolder", createFolder)
router.use("/createFolderInside", createFolderInside)
router.use("/createFolderOutside", createFolderOutside)


module.exports = router;




