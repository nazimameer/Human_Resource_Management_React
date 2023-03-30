const express = require("express");
const router = express.Router();
const hrController = require("../controllers/hrController");
const Authentication = require("../middleware/varifyJwt");





router.post("/login", hrController.postLogin);
router.post("/LoginPageAuth", hrController.verifyLogin);
router.get("/employees", Authentication.verifyToken, hrController.getEmployees);
router.post("/addemployee",Authentication.verifyToken,hrController.addEmployee);
router.post("/checkemail", Authentication.verifyToken, hrController.checkemail);
router.get("/applications",Authentication.verifyToken,hrController.getApplications);
router.post("/applicationApprove",Authentication.verifyToken,hrController.applicApprove);
router.post("/applicationReject",Authentication.verifyToken,hrController.applicReject);
router.get("/applications/approved",Authentication.verifyToken,hrController.getApproved);
router.get("/applications/rejected",Authentication.verifyToken,hrController.getRejected);
router.get('/getAttendance',Authentication.verifyToken,hrController.getAttendace);
router.post('/confirmPresent',Authentication.verifyToken,hrController.confirmAttendance)
router.post('/confirmAbsent',Authentication.verifyToken,hrController.confirmAbsent)
router.get('/getPresent',Authentication.verifyToken,hrController.getPresent);
router.get('/getAbsent',Authentication.verifyToken,hrController.getAbsent);
router.post('/blockEmployee',Authentication.verifyToken,hrController.blockEmployee);
router.post('/unblockEmployee',Authentication.verifyToken,hrController.unblockEmployee);
router.get('/employee/edit/:id',Authentication.verifyToken,hrController.geteditEmployee);
router.post('/employee/edit',Authentication.verifyToken,hrController.posteditEmployee);
router.post('/employee/edit/remove',Authentication.verifyToken,hrController.removeEmployee)
router.post('/employee/edit/replace',Authentication.verifyToken,hrController.replaceEmployee);
router.post('/addDepartment',Authentication.verifyToken,hrController.addDepartment);
router.post('/checkDepartment',Authentication.verifyToken,hrController.checkDepartment);
router.get('/getDepartments',Authentication.verifyToken,hrController.getDepartments);
router.get('/getDepartmentInfo/:id',Authentication.verifyToken,hrController.departmentInfo);
router.get('/getAllEmployees',Authentication.verifyToken, hrController.getEmployees);
router.get('/gethrname',Authentication.verifyToken,hrController.getHrName)
module.exports = router;
