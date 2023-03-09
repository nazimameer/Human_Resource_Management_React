const express = require('express');
const router = express.Router()
const hrController = require('../controllers/hrController')
const Authentication = require('../middleware/varifyJwt')
router.post('/login',hrController.postLogin)
router.post('/LoginPageAuth',hrController.verifyLogin)
router.get('/employees',Authentication.varifyToken,hrController.getEmployees)
router.post('/addemployee',Authentication.varifyToken,hrController.addEmployee)
router.post('/checkemail',Authentication.varifyToken,hrController.checkemail)
router.get('/applications',Authentication.varifyToken,hrController.getApplications)
router.post('/applicationApprove',Authentication.varifyToken,hrController.applicApprove);
router.post('/applicationReject',Authentication.varifyToken,hrController.applicReject)
router.get('/applications/approved',Authentication.varifyToken,hrController.getApproved);
router.get('/applications/rejected',Authentication.varifyToken,hrController.getRejected)

module.exports = router; 