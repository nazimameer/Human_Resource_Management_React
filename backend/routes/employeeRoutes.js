const express = require('express');
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const Authentication = require('../middleware/varifyJwt')


router.post('/login',employeeController.postLogin)
router.post('/LoginPageAuth',employeeController.LoginPageAuth)
router.post('/leave_application',Authentication.varifyToken,employeeController.LeaveApplication)
router.get('/previousApplication',Authentication.varifyToken,employeeController.getApplication)
router.get('/profile',Authentication.varifyToken,employeeController.getProfile)


module.exports = router; 