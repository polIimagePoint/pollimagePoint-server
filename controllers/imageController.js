const Image = require('../models/image.js')


class imageController {

    static addImage(req, res) {
        return new Promise ((resolve, reject) => {
            Image
            .create({
                name : req.body.name,
                description : req.body.description,
                url : req.file.cloudStoragePublicUrl
            })
            .then(data => {
                resolve({
                    msg : 'add img success'
                })
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static getImage(req, res) {
        Image.find()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = imageController