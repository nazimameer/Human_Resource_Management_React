const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const employeeModel = require("../models/employeeModel");
const applicationModel = require("../models/leaveApplication");
const jwt = require("jsonwebtoken");
const secretKey = "Brototype";
const skillModel = require("../models/skillModel");
module.exports = {
  LoginPageAuth: (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ").pop();
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(500).json({ error: "Authentication failed" });
      } else {
        console.log(decoded);
        res.status(200).json({ success: true });
      }
    });
  },
  postLogin: async (req, res) => {
    console.log("haldj");
    const data = req.body;
    const user = await employeeModel.findOne({
      email: data.username,
    });

    if (user) {
      const inputPassword = data.password;
      const { password } = user;
      const isMatch = await bcrypt.compare(inputPassword, password);

      if (isMatch) {
        //jwt generates

        // Payload
        const payload = {
          id: user.id,
          uid: user.UID,
          email: user.email,
        };
        // Secret Key
        const secretKey = "Brototype";

        // Expire
        const expire = {
          expiresIn: 84000,
        };

        // Sign Token
        const token = jwt.sign(payload, secretKey, expire);
        res.status(200).json({ success: true, token: token });
      } else {
        res.status(400).json({ error: "Incorrect Password" });
      }
    } else {
      res.status(401).json({ error: "Invalid Username or Password" });
    }
  },
  LeaveApplication: async (req, res) => {
    const data = req.body;
    const leavePeriod = data.leaveperiod;
    if (leavePeriod === "Half Day") {
      const UID = req.uid;
      const employee = await employeeModel.findOne({ UID: UID });
      const name = employee.fullname;
      const now = new Date();
      const reason = data.reason;
      await applicationModel.create({
        UID: UID,
        name: name,
        submiton: now,
        leavePeriod: "Half Day",
        reason: reason,
      });
    } else if (leavePeriod === "Full Day") {
      const now = new Date();
      const UID = req.uid;
      const employee = await employeeModel.findOne({ UID: UID });
      const name = employee.fullname;
      const reason = data.reason;
      const d1 = new Date(data.from);
      const d2 = new Date(data.to);
      const diffInMs = Math.abs(d2.getTime() - d1.getTime());
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      await applicationModel.create({
        UID: UID,
        name: name,
        submiton: now,
        leavePeriod: diffInDays,
        reason: reason,
        from: d1,
        to: d2,
      });
    }

    res.status(200).json({ success: true });
  },

  getApplication: async (req, res) => {
    const uid = req.uid;
    const applications = await applicationModel.find({ UID: uid });
    const applicationsinfo = [];
    const data = await applications.forEach((obj) => {
      const date = obj.submiton;
      const year = date.getFullYear();
      const month = date.toLocaleString("default", { month: "long" });
      const day = date.getDate().toString().padStart(2, "0");
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");

      let AmorPm = "AM";
      if (hours >= 12) {
        AmorPm = "PM";
      }

      if (hours > 12) {
        hours -= 12;
      }

      const submitdate = `${day} ${month} ${year} at ${hours}:${minutes} ${AmorPm}`;
      const reason = obj.reason;
      const status = obj.status;
      const alldata = {
        submitdate: submitdate,
        reason: reason,
        status: status,
      };
      applicationsinfo.push(alldata);
    });

    console.log(applicationsinfo);

    res.status(200).json({ applicationsinfo });
  },

  getProfile: async (req, res) => {
    const uid = req.uid;
    const profile = await employeeModel.findOne({
      UID: uid,
    });

    res.status(200).json({ profile });
  },
  addskill: async (req, res) => {
    try {
      const uid = req.uid;
      const data = req.body.data;

      if (data != "") {
        const skill = data.toUpperCase();
        const collectionEx = await skillModel.findOne({ UID: uid });
        if (collectionEx) {
          const ex = await skillModel.findOne({
            UID: uid,
            skills: { $in: [skill] },
          });

          if (ex) {
            res.status(400).json({ error: "the skill already exist" });
            return;
          }
          skillModel
            .updateOne(
              { UID: uid },
              {
                $push: {
                  skills: skill,
                },
              }
            )
            .then((response) => {
              res.status(200).json({ success: true });
            })
            .catch(() => {
              Promise.reject();
            });
        } else {
          skillModel
            .create({
              UID: uid,
              skills: [skill],
            })
            .then(() => {
              res.status(200).json({ success: true });
            })
            .catch(() => {
              Promise.reject();
            });
        }
      } else {
        res.status(400).json({ error: "no data provided" });
      }
    } catch (error) {
      console.log(error);
    }
  },
  getSkills: (req, res) => {
    try {
      const uid = req.uid;
      skillModel
        .find(
          {
            UID: uid,
          },
          {
            skills: 1,
          }
        )
        .then((skills) => {
          res.status(200).json({ skills });
        });
    } catch (error) {
      Promise.reject();
    }
  },
  removeSkill:(req,res)=>{
    const data = req.body.value;
    const uid = req.uid;
    skillModel.updateOne(
      {UID:uid},
      {$pull:{skills:{$in:[data]}}}
    ).then(()=>{
      res.status(200).json({ success: true });
    }).catch((error)=>{
      console.log(error)
        res.status(500).json({ error:"server error" })
      
    })
  }
};
