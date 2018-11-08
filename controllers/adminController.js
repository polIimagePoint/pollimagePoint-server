const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const helpers = require('../helpers/helpers')

class AdminController {

  static register (req, res) {
    const hash = bcryptjs.hashSync(req.body.password, 10);
    User
      .create({
        name : req.body.name,
        password : hash
      })
      .then(result => {
        res.status(201).json({
          msg : "User successfully created"
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static login(req, res) {
    User
      .findOne({
        name : req.body.name
      })
      .then(user => {
        const result = bcryptjs.compareSync(req.body.password, user.password);
        if(result) {
          helpers
            .generateToken(user.name, user.id)
            .then(token => {
              res.status(200).json({
                msg : 'login success',
                token : token
              })
            })
            .catch(err => {
              res.status(500).json(err)
            })
          
        } else {
          res.status(400).json({
            msg : 'Invalid username / password'
          })
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = AdminController