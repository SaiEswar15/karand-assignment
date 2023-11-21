const express = require("express");
//import multer
const multer = require("multer");

const router = express.Router();



const {upload} = require("../Controllers/UploadControllers");
const {itemsUpload} = require("../Controllers/UploadControllers");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + file.originalname
      cb(null, uniqueSuffix)
    }
  })
  
  const imageUploads = multer({ storage: storage })


router.post("/file", imageUploads.single("image") ,upload)
router.post("/item", itemsUpload)



module.exports = router;    