const express = require('express');
const router = express.Router()
const employeeController = require('../controllers/employeeController')

router.post('/login',employeeController.postLogin)


module.exports = router; 