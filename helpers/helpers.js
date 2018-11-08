const jwt = require('jsonwebtoken')
require('dotenv').config()

class Helper {

  static generateToken (name, id) {
    return new Promise ((resolve, reject) => {
      const user = {
        'name' : name,
        'id' : id
      }
      const token = jwt.sign(user, process.env.JWT_SECRET);
      console.log('tester', token)
      token ? resolve(token) : reject('generete token failed')
    }) 
  }

}

module.exports = Helper