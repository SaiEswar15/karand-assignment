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
  const { to, subject, text, attachmentName, folderName, searchModal } = req.body;
  console.log(req.body)

  const mailOptions = {
    from: 'premkumaryoyo1@gmail.com',
    to,   
    subject,
    text,
    html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <style>
        .details-con {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #1677ff;
            border: 1px solid grey;
            border-radius: 15px;
    
        }
    
        .details-heading {
            color: white;
            font-size: 25px;
            padding: 1rem;
    
    
        }
    
        .details-col {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: #e6f4ff;
            border-radius: 15px;
        }
    
        .details-col-1 {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    
        .details-col-1 div {
            height: 2rem;
            overflow: hidden;
        }
    
    
    
        .details-col-2 {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    
        .details-col-2 div {
            height: 2rem;
            overflow: hidden;
        }
    
    
        .details-col-3 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
        }
    
        .details-col-3 div {
            height: 2rem;
            overflow: hidden;
        }
    
        .proofs-div {
            height: 5rem;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    </style>
    
    <body>
        <div class='searchdata-container'>
    
            <div class='details-con'>
                <p class='details-heading'>Your details</p>
                <div class='details-col'>
                    <div class='details-col-1'>
                        <div>
                            <p>Name : ${searchModal.name}</p>
                        </div>
                        <div>
                            <p>Mobile : ${searchModal.mobile} </p>
                        </div>
                        <div>
                            <p>email : ${searchModal.email} </p>
                        </div>
                        <div>
                            <p>Aadhar Card Number : ${searchModal.aadhar} </p>
                        </div>
                        <div>
                            <p>PAN Number : ${searchModal.pan} </p>
                        </div>
                        <div>
                            <p>Company : ${searchModal.company}</p>
                        </div>
                        <div>
                            <p>Job Title : ${searchModal.title} </p>
                        </div>
                        <div>
                            <p>Date of joining : ${searchModal.doj}</p>
                        </div>
                        <div>
                            <p>Date of ending : ${searchModal.doe}</p>
                        </div>
                        <div>
                            <p>Status : ${searchModal.status}</p>
                        </div>
                        <div>
                            <p>Reason for Endorse : ${searchModal.reasonToEndorse}</p>
                        </div>
                        <div>
                            <p>Witnesses : ${searchModal.witnesses}</p>
                        </div>
                        <section class='proofs-div'>
                            <p>Proofs : </p>
                        </section>
    
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    </html>`,
    attachments: [
      {
        filename: `${attachmentName}`,
        path: `../uploads/${folderName}/${to}/${attachmentName}`
      }
    ]
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