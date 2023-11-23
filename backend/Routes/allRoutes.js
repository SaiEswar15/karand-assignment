const express = require("express");

const router = express.Router();


const AuthorizationRouter = require("./AuthenticationRoutes");
const UploadRouter = require("./UploadRoutes");
const SearchRouter = require("./SearchRoutes")
const EmailRouter = require("./EmailRoutes")
const FolderRouter = require("./CreateFolderRoutes")
const FileRouter = require("./createFileRoutes")


router.use("/auth",AuthorizationRouter)
router.use("/upload",UploadRouter)
router.use("/search", SearchRouter)
router.use("/email", EmailRouter)
router.use("/create", FolderRouter)
router.use("/addfile", FileRouter)
module.exports = router;