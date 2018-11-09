var express = require('express');
var router = express.Router();
const AdminController = require('../controllers/adminController')

/* GET users listing. */
router.get('/', AdminController.register);
router.post('/', AdminController.register);
router.post('/login', AdminController.login);

module.exports = router;