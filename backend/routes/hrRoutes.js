const express = require("express");
const router = express.Router();
const hrController = require("../controllers/hrController");
const Authentication = require("../middleware/varifyJwt");
router.post("/login", hrController.postLogin);
router.post("/LoginPageAuth", hrController.verifyLogin);
router.get("/employees", Authentication.verifyToken, hrController.getEmployees);
router.post(
  "/addemployee",
  Authentication.verifyToken,
  hrController.addEmployee
);
router.post("/checkemail", Authentication.verifyToken, hrController.checkemail);
router.get(
  "/applications",
  Authentication.verifyToken,
  hrController.getApplications
);
router.post(
  "/applicationApprove",
  Authentication.verifyToken,
  hrController.applicApprove
);
router.post(
  "/applicationReject",
  Authentication.verifyToken,
  hrController.applicReject
);
router.get(
  "/applications/approved",
  Authentication.verifyToken,
  hrController.getApproved
);
router.get(
  "/applications/rejected",
  Authentication.verifyToken,
  hrController.getRejected
);
router.get('/getAttendance',Authentication.verifyToken,hrController.getAttendace)
module.exports = router;
