const bcrypt = require("bcrypt");
const employeeModel = require("../models/employeeModel");
const applicationModel = require("../models/leaveApplication");
const jwt = require("jsonwebtoken");
const secretKey = "Brototype";
const { mongoose } = require("mongoose");
const skillModel = require("../models/skillModel");
const hobbieModel = require("../models/hobbieModel");
const attendanceModel = require("../models/employeeAttendance");
const IntTaskModel = require("../models/individualTaskModal");
const hrModel = require("../models/hrModel");
const salaryModel = require('../models/salaryModel');
const announcementModel = require("../models/announcementModel");
module.exports = {
  LoginPageAuth: (req, res) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  },

  postLogin: async (req, res) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  },

  LeaveApplication: async (req, res) => {
    try {
      const data = req.body;
      const leavePeriod = data.leaveperiod;
      if (leavePeriod === "Half Day") {
        const UID = req.uid;
        const employee = await employeeModel.findOne({ UID: UID });
        const name = employee.fullname;
        const now = new Date();
        const reason = data.reason;
        const section = data.period;
        await applicationModel.create({
          UID: UID,
          name: name,
          submiton: now,
          leavePeriod: "Half Day",
          reason: reason,
          section:section,
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
    } catch (error) {
      console.log(error);
    }
  },

  getApplication: async (req, res) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  },

  getProfile: async (req, res) => {
    try {
      const uid = req.uid;
      const profile = await employeeModel.findOne({
        UID: uid,
      });
      res.status(200).json({ profile });
    } catch (error) {
      console.log(error);
    }
  },

  addHobbie: async (req, res) => {
    try {
      const uid = req.uid;
      const data = req.body.data;
      if (data != "") {
        const hobbie = data.toUpperCase();
        const collectionEx = await hobbieModel.findOne({ UID: uid });
        if (collectionEx) {
          const ex = await skillModel.findOne({
            UID: uid,
            skills: { $in: [hobbie] },
          });

          if (ex) {
            res.status(409).json({ error: "the hobbie already exist" });
            return;
          }

          hobbieModel
            .updateOne(
              { UID: uid },
              {
                $push: {
                  hobbies: hobbie,
                },
              }
            )
            .then(() => {
              res.status(200).json({ success: true });
            })
            .catch(() => {
              Promise.reject();
            });
        } else {
          hobbieModel
            .create({
              UID: uid,
              hobbies: [hobbie],
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
            res.status(409).json({ error: "the skill already exist" });
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
            .then(() => {
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
      console.log(error);
    }
  },

  removeSkill: (req, res) => {
    try {
      const data = req.body.value;
      const uid = req.uid;
      skillModel
        .updateOne({ UID: uid }, { $pull: { skills: { $in: [data] } } })
        .then(() => {
          res.status(200).json({ success: true });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ error: "server error" });
        });
    } catch (error) {
      console.log(error);
    }
  },

  removeHobbie: (req, res) => {
    try {
      const uid = req.uid;
      const data = req.body.value;
      hobbieModel
        .updateOne({ UID: uid }, { $pull: { hobbies: { $in: [data] } } })
        .then(() => {
          res.status(200).json({ success: true });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ error: " server error" });
        });
    } catch (error) {
      console.log(error);
    }
  },

  getHobbies: (req, res) => {
    try {
      const uid = req.uid;
      hobbieModel.find({ UID: uid }, { hobbies: 1 }).then((hobbies) => {
        res.status(200).json({ hobbies });
      });
    } catch (error) {
      console.log(error);
    }
  },  

  markAttendance: async (req, res) => {
    try {
      const uid = req.uid;
      const employee = await employeeModel.findOne({
        UID: uid,
      });
      const fullname = employee.fullname;
  
      // Today Date
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1; // Add 1 to get month number from 1-12
      const day = today.getDate();
      const date = `${day}-${month}-${year}`;
      // 

      // Take Time 
      const hour = today.getHours() % 12 || 12; // converts to 12-hours format
      const minute = today.getMinutes();
      const second = today.getSeconds();
      const amPm = hour >= 12 ? "AM": "PM";
      const time = `${hour}:${minute}:${second} ${amPm}`;
      const position = employee.position;
      console.log(time);
      //
      console.log(position);
      let status = "";

      if (hour > 9 || (hour === 9 && minute === 0)) {
        status = "Late";
      } else {
      }

      const image = { 
        url: req.file.path,
        filename: req.file.filename,
      };

      const dbdate = await attendanceModel
        .findOne({ date: date })
        .then((attendance) => {
          console.log("Over here 1");
          if (attendance) {
            console.log("Over here 2");

            attendanceModel
              .findOneAndUpdate(
                { date: date },
                {
                  $push: {
                    attendance: {
                      UID: uid,
                      fullname: fullname,
                      time: time,
                      position: position,
                      image: image,
                    },
                  },
                }
              )
              .then(() => {
                console.log("Over here 5");

                res.status(200).json({ success: true });
              });
          } else {
            console.log("Over here 3");

            attendanceModel
              .create({
                date: date,
                attendance: [
                  {
                    UID: uid,
                    fullname: fullname,
                    time: time,
                    position: position,
                    image: image,
                  },
                ],
              })
              .then(() => {
                console.log("Over here 4");

                res.status(200).json({ success: true });
              });
          }
        });
    } catch (error) {
      console.log(error);
    }
  },

  homeInfo: (req, res) => {
    try {
      const uid = req.uid;

      employeeModel
        .findOne({
          UID: uid,
        })
        .then((response) => {
          if (response) {
            const data = response;
            res.status(200).json({ data });
          }
        });
    } catch (error) {
      console.log(error);
    }
  },
  verifyCheckIn: (req, res) => {
    const uid = req.uid;
    // Today Date
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Add 1 to get month number from 1-12
    const day = today.getDate();
    const date = `${day}-${month}-${year}`;
    //

    attendanceModel
      .findOne({
        date: date,
        attendance: { $elemMatch: { UID: uid } },
      })
      .then((doc) => {
        if (doc) {
          res.status(200).json({ success: true });
        } else if (!doc) {
          res.status(404).json({ error: "no attendance marked" });
        }
      });
  },
  getSalaryInfo: (req, res) => {
    const uid = req.uid;
    employeeModel
      .findOne({ UID: uid })
      .then((doc) => {
        if (doc) {
          const data ={
            salary:doc.salary,
            holdername:doc.holdername,
            accNo:doc.accountNo,
            ifsc:doc.ifsc
          } 
          res.status(200).json({ data });
        } else {
          res.status(404).json({ error: "No Document Found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: " Internal Server Error" });
        console.log(error);
      });
  },
  checkBlocked: async (req, res) => {
    const uid = req.uid;
    console.log(uid);

    const doc = await employeeModel.findOne({ UID: uid, status: "Blocked" });

    if (doc) {
      console.log("blocked");
      res.status(400).json({ error: "YOU ARE BLOCKED" });
    } else {
      console.log("done");
      res.status(200).json({ success: true });
    }
  },
  allUsers: async (req, res) => {
    const keyword = { fullname: req.query.search };

    const users = await employeeModel.findOne(keyword.fullname);
    console.log(users);
  },
  getAllTasks: (req, res) => {
    const uid = req.uid;

    IntTaskModel.findOne({
      UID: uid,
    })
      .then((doc) => {
        const data = doc;
        if(data){
          const tasks = data.tasks;
          res.status(200).json({ tasks });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  },

  taskFinished: (req, res) => {
    const id = req.uid;
    const data = req.body.id;

    IntTaskModel.findOneAndUpdate(
      {
        UID: id,
        "tasks._id": data,
      },
      {
        $set: {
          "tasks.$.status": "Finished",
        },
      },
      {
        new: true,
      }
    )
      .then((doc) => {
        res.status(200).json({ success: true });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  },
  taskPending: (req, res) => {
    const id = req.uid;
    const data = req.body.id;

    IntTaskModel.findOneAndUpdate(
      {
        UID: id,
        "tasks._id": data,
      },
      {
        $set: {
          "tasks.$.status": "Pending",
        },
      },
      {
        new: true,
      }
    )
      .then((doc) => {
        res.status(200).json({ success: true });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  },

  taskIncomplete: (req, res) => {
    const id = req.uid;
    const data = req.body.id;
    IntTaskModel.findOneAndUpdate(
      {
        UID: id,
        "tasks._id": data,
      },
      {
        $set: {
          "tasks.$.status": "Incomplete",
        },
      },
      {
        new: true,
      }
    )
      .then((doc) => {
        res.status(200).json({ success: true });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  },
  getUserName:(req,res)=>{
    const uid = req.uid;
    employeeModel.findOne({
      UID:uid,
    }).then((doc)=>{
      if(doc){
        const data = doc;
        res.status(200).json({ data })
      }
    }).catch((error)=>{
      console.log(error);
      res.status(500).json({error:"Internal Server Error"})
    })
  },
  getAllhr:(req,res)=>{
    hrModel.find({}).then((doc)=>{
      if(doc){
        const data = doc
        res.status(200).json({ data })
      }
    }).catch((error)=>{
      console.log(error)
      res.status(500).json({error:"Internal Server Error"})
    })
  },
  getMyInfo:(req,res)=>{

    const id = req.id;
    const objID = mongoose.Types.ObjectId(id)
    employeeModel.findOne({
      _id:objID
    }).then((doc)=>{
      if(doc){
        const data = doc;
        res.status(200).json({data})
      }
    })
  }, 

  setAccount:(req,res)=>{
    const uid = req.uid;
    const data = req.body.formData;
    const holder = data.holdername;
    const accNo = data.accountno;
    const ifsc = data.ifsc
    employeeModel.updateOne({UID:uid},
      {$set:{ accountNo:accNo, holdername:holder,ifsc:ifsc }}).then((doc)=>{
        if(doc){
          res.status(200).json({success:true})
        }
      })
  },
  getPayslips:(req,res)=>{
    const uid = req.uid;

    if(uid){
      salaryModel.findOne({UID:uid}).then((doc)=>{
        if(doc){
          const data = doc.salaries;
          res.status(200).json({data})
        }
      })
    }
  },
  getPayslip:(req,res)=>{
    const uid = req.uid;
    const id = req.params.id;
    console.log(id)
    if(id === null){
      res.status(400).json({error:"something went wrong"})
      return; 
    }
    const objid = mongoose.Types.ObjectId(id);
    salaryModel.findOne({
      UID:uid
    }).then((doc)=>{
      if(doc){
        salaryModel.findOne({
          UID:uid,
          salaries: {
            $elemMatch: {
              _id: objid
            }
          }
        }).then((doc)=>{
          console.log(doc)
          res.status(200).json({ doc })
        }) 
      }else{
        console.log("not done here ")

        res.status(404).json({error:"Salary Slip Not Found"})
      }
    })
  },
  getAllAnnou:(req,res)=>{
    announcementModel.find({}).then((doc)=>{
      if(doc){
        res.status(200).json({doc})
      }
    }).catch((error)=>{
      res.status(500).json({error:"Internal Server Error"})
    })
  },
  markCheckout:(req,res)=>{
    const uid = req.uid;
    console.log(uid)
    const today = new Date();
    // Today Date
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Add 1 to get month number from 1-12
    const day = today.getDate();
    const date = `${day}-${month}-${year}`;
    // 
    // Take Time 
    const hour = today.getHours() % 12 || 12; // converts to 12-hours format
    const minute = today.getMinutes();
    const second = today.getSeconds();
    const amPm = hour >= 12 ? "AM" : "PM";
    const time = `${hour}:${minute}:${second} ${amPm}`;
    console.log(time);
    //
    attendanceModel.updateOne({date:date, 'attendance.UID':uid},
      {$set:{ 'attendance.$.checkout': time }}).then((doc)=>{
        res.status(200).json({success:true})
      }).catch((error)=>{
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
      })

    
  }
  
};
