const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const Authentication = require("../middleware/varifyJwt");

router.post("/login", employeeController.postLogin);
router.post("/LoginPageAuth", employeeController.LoginPageAuth);
router.post(
  "/leave_application",
  Authentication.verifyToken,
  employeeController.LeaveApplication
);
router.get(
  "/previousApplication",
  Authentication.verifyToken,
  employeeController.getApplication
);
router.get(
    "/profile",
  Authentication.verifyToken,
  employeeController.getProfile
);
router.post('/addskills',Authentication.verifyToken,employeeController.addskill);
router.get('/skills',Authentication.verifyToken,employeeController.getSkills);
router.post('/removeskill',Authentication.verifyToken,employeeController.removeSkill);
router.post('/removeHobbie',Authentication.verifyToken,employeeController.removeHobbie)
router.post('/addHobbie',Authentication.verifyToken,employeeController.addHobbie);
router.get('/hobbies',Authentication.verifyToken,employeeController.getHobbies)

module.exports = router;
