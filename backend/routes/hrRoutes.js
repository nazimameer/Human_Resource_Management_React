const express = require('express');
const router = express.Router()
const hrController = require('../controllers/hrController')
const Authentication = require('../middleware/varifyJwt')
router.post('/login',hrController.postLogin)
router.post('/LoginPageAuth',hrController.verifyLogin)
router.get('/employees',Authentication.varifyToken,hrController.getEmployees)
router.post('/addemployee',Authentication.varifyToken,hrController.addEmployee)

module.exports = router; 