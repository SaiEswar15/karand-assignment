const express = require("express");
const nodemailer = require('nodemailer');
// const multer = require('multer');
const router = express.Router();


// let og = ""
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + file.originalname
//       og = uniqueSuffix
//       cb(null, uniqueSuffix)
//     }
//   })



// const upload = multer({ storage: storage })

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'premkumaryoyo1@gmail.com',
    pass: 'skugmhbljtdduoqq',
  },
});
// router.use('/send-email', upload.single('attachment'),(req, res) => {
router.use('/send-email', (req, res) => {
    const { to, subject, text } = req.body;
    console.log(req.body)
  
    const mailOptions = {
      from: 'premkumaryoyo1@gmail.com',
      to,
      subject,
      text,
    //   attachments: attachmentPath ? [{ path: attachmentPath }] : [],
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  });


module.exports = router;