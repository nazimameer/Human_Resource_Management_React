const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const Authentication = require("../middleware/varifyJwt");
const Attendance = require('../middleware/AttendanceCloudinary');



router.get('/', employeeController.allUsers);
router.post("/login", employeeController.postLogin);
router.post("/LoginPageAuth", employeeController.LoginPageAuth);
router.post("/leave_application", Authentication.verifyToken,employeeController.LeaveApplication);
router.get("/previousApplication", Authentication.verifyToken,employeeController.getApplication);
router.get("/profile", Authentication.verifyToken,employeeController.getProfile);
router.post('/addskills', Authentication.verifyToken,employeeController.addskill);
router.get('/skills', Authentication.verifyToken,employeeController.getSkills);
router.post('/removeskill', Authentication.verifyToken,employeeController.removeSkill);
router.post('/removeHobbie', Authentication.verifyToken,employeeController.removeHobbie);
router.post('/addHobbie', Authentication.verifyToken,employeeController.addHobbie);
router.get('/hobbies', Authentication.verifyToken,employeeController.getHobbies);
router.post('/attendance', Authentication.verifyToken,Attendance,employeeController.markAttendance);
router.get('/homeInfo', Authentication.verifyToken,employeeController.homeInfo);
router.post('/verifyCheckIn', Authentication.verifyToken,employeeController.verifyCheckIn);
router.get('/getSalaryInfo', Authentication.verifyToken,employeeController.getSalaryInfo);
router.post('/checkBlocked', Authentication.verifyToken,employeeController.checkBlocked);
router.get('/getAllTasks',Authentication.verifyToken,employeeController.getAllTasks);
router.patch('/taskfinished',Authentication.verifyToken,employeeController.taskFinished)
router.patch('/taskPending',Authentication.verifyToken,employeeController.taskPending)
router.patch('/taskIncomplete',Authentication.verifyToken,employeeController.taskIncomplete);
router.get('/getEmployeename',Authentication.verifyToken,employeeController.getUserName);
router.get('/getAllhr',Authentication.verifyToken,employeeController.getAllhr);
router.get('/getUserInfo',Authentication.verifyToken,employeeController.getMyInfo)
router.post('/setAccount',Authentication.verifyToken,employeeController.setAccount)
router.get('/getPayslips',Authentication.verifyToken,employeeController.getPayslips);
router.get('/getSalarySlip/:id',Authentication.verifyToken,employeeController.getPayslip);
router.get('/getAllAnnounce',Authentication.verifyToken,employeeController.getAllAnnou);
router.post('/markCheckout',Authentication.verifyToken, employeeController.markCheckout);
 
module.exports = router;
 