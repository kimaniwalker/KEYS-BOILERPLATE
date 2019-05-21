import { Router } from 'express';

const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');


let router = Router();
router.use(bodyParser.urlencoded({extended: true}))


router.get('/', function(req, res) {
    res.sendFile(__dirname + '../../../client/src/components/welcome.jsx' );   
});

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './serverImages')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })

  router.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    console.log('I am here , this is a test');
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
    
  })


 

export default router;