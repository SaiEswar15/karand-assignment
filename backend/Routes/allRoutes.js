const express = require("express");

const router = express.Router();


const AuthorizationRouter = require("./AuthenticationRoutes");
const UploadRouter = require("./UploadRoutes");
const SearchRouter = require("./SearchRoutes")

router.use("/auth",AuthorizationRouter)
router.use("/upload",UploadRouter)
router.use("/search", SearchRouter)

module.exports = router;