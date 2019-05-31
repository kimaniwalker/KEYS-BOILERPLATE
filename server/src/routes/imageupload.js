import { Router } from 'express';
const express = require('express')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')

let router = Router();
router.use(formData.parse())

router.post('/image-upload', (req, res) => {

  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => res.json(results))
})

export default router;
