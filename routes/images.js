const router = require('express').Router()
const images = require('../helpers/images')
const imageController = require('../controllers/imageController')
 

// router.post('/', imageController.upload)
router.get('/', imageController.getImage)

 
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
      imageController
        .addImage(req, res)
        .then(msg => {
            res.status(200).json(msg)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    // res.send({
    //   status: 200,
    //   message: 'Your file is successfully uploaded',
    //   link: req.file.cloudStoragePublicUrl
    // })
  })



module.exports = router