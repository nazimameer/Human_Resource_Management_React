const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const employeeModel = require("../models/employeeModel");
const applicationModel = require("../models/leaveApplication");
const attendanceModel = require("../models/employeeAttendance");
const DepartmentModel = require('../models/departmentModal')

const secretKey = "Brototype";
const hrModel = require("../models/hrModel");
const { default: mongoose } = require("mongoose");
const departmentModal = require("../models/departmentModal");
module.exports = {
  verifyLogin: (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ").pop();
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(500).json({ error: "Authentication failed" });
      } else {
        res.status(200).json({ success: true });
      }
    });
  },

  postLogin: async (req, res) => {
    try {
      // Handle error
      const data = req.body; // Puting the data in to a variable
      const providedUsername = data.username; // Taking usename from provided data
      const providedPass = data.password; // Taking password from provided data
      const hrDetails = await hrModel.findOne({ username: providedUsername }); // Take hr details from db with provided username

      if (hrDetails) {
        // Check whether hrExist or not
        const hrId = hrDetails._id; // Take id from hr details doc
        const hrUsername = hrDetails.username; // Take username from hr details doc
        const hrPassword = hrDetails.password; // Take password from hr details doc

        bcrypt.compare(providedPass, hrPassword, (err, isMatch) => {
          if (err) {
            res.status(500).json({ error: "Internal Server Error....!" }); // Send error msg to client side
          }
          if (isMatch) {
            // Varification done Jwt generates

            // Payload
            const payload = {
              id: hrId,
              username: providedUsername,
            };
            // Secret key
            const secretKey = "Brototype";

            // Expire
            const expire = {
              expiresIn: 84600,
            };

            // Sign token
            const token = jwt.sign(payload, secretKey, expire);
            res.status(200).json({ success: true, token: token }); // Send response with token
          } else {
            res.status(401).json({ message: "Incorrect Password...!" });
          }
        });
      } else {
        res.status(401).json({ error: "Invalid Username or Password" }); // Username is be wrong so send error msg
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server Busy.....!" }); // Catching error and send response
    }
  },

  checkemail: async (req, res) => {
    try {
      const checkemail = req.body.email;
      const gotit = await employeeModel.findOne({
        email: checkemail,
      });

      if (!gotit) {
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ error: "email already taken" });
      }
    } catch (error) {
      console.log(error);
    }
  },

  getApplications: async (req, res) => {
    try {
      const applicationsinfo = [];
      const applications = await applicationModel.find({ status: "Pending" });
      if (applications.length != 0) {
        applications.forEach((obj) => {
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
          const _id = obj._id;
          const uid = obj.UID;
          const period = obj.leavePeriod;
          const reason = obj.reason;
          const name = obj.name;
          const submitdate = `${day} ${month} ${year} at ${hours}:${minutes} ${AmorPm}`;
          const alldata = {
            _id: _id,
            uid: uid,
            name: name,
            period: period,
            reason: reason,
            submiton: submitdate,
          };
          applicationsinfo.push(alldata);
        });
        res.status(200).json({ applicationsinfo });
      } else {
        res.status(400).json({ error: "no data available" });
      }
    } catch (error) {
      console.log(error);
    }
  },

  applicApprove: async (req, res) => {
    const id = req.body.id;

    const objid = mongoose.Types.ObjectId(id);
    applicationModel
      .updateOne({ _id: objid }, { $set: { status: "Approved" } })
      .then((response) => {
        res.status(200).json({ success: true });
      });
  },

  applicReject: async (req, res) => {
    try {
      const id = req.body.id;
      const objid = mongoose.Types.ObjectId(id);
      const update = await applicationModel.updateOne(
        { _id: objid },
        { $set: { status: "Rejected" } }
      );

      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
    }
  },

  addEmployee: async (req, res) => {
    try {
      const data = req.body; // Puting the data in to a variable
      const { password } = data;
      const saltRounds = 10;
      const hashedPassword = bcrypt.hashSync(password, saltRounds);
      // Algorithm to generate unique user ID
      const UIDs = []; // Initialize an empty array
      const employees = await employeeModel.find({}); //taken all documents in employees collection
      // Taken all UID from each doc and stored in UIDs array
      employees.forEach((employee) => {
        if (employee.UID == undefined) {
          // Check if the UID is undefined
          return;
        }
        UIDs.push(employee.UID); // push in to array: UIDs
      });
      // Generate a random number and check its already in that array
      const RandomNumber = () => Math.floor(10000 + Math.random() * 90000); // Generate a random number with 5 digits

      // Puting unique number into UID variable
      let UID; // Declares variable
      do {
        UID = RandomNumber();
      } while (UIDs.includes(UID));
      //

      // Add user to db with uid
      await employeeModel
        .create({
          UID: UID,
          fullname: data.fullname,
          place: data.place,
          position: data.position,
          role: data.role,
          email: data.email,
          phone: data.phone,
          password: hashedPassword,
          salary: data.salary,
          department: data.department,
        })
        .then(() => {
          res.json({ success: true }); // Send response after add user done
        });
    } catch (error) {
      console.log(error); // Display error
      res.status(500).json({ error: "Server Busy.....!" }); // Catching error and send response
    }
  },

  getEmployees: async (req, res) => {
    try {
      const employees = await employeeModel.find({});
      const length = employees.length;
      res.status(200).json({
        status: true,
        employees,
        length,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getApproved: async (req, res) => {
    try {
      const applicationsinfo = [];
      const applications = await applicationModel.find({ status: "Approved" });
      if (applications.length != 0) {
        applications.forEach((obj) => {
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
          const _id = obj._id;
          const uid = obj.UID;
          const period = obj.leavePeriod;
          const reason = obj.reason;
          const name = obj.name;
          const submitdate = `${day} ${month} ${year} at ${hours}:${minutes} ${AmorPm}`;
          const alldata = {
            _id: _id,
            uid: uid,
            name: name,
            period: period,
            reason: reason,
            submiton: submitdate,
          };
          applicationsinfo.push(alldata);
        });

        res.status(200).json({ applicationsinfo });
      } else {
        res.status(404).json({ error: " no data available" });
      }
    } catch (error) {
      console.log(error);
    }
  },

  getRejected: async (req, res) => {
    try {
      const applicationsinfo = [];
      const applications = await applicationModel.find({ status: "Rejected" });
      if (applications.length != 0) {
        applications.forEach((obj) => {
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
          const _id = obj._id;
          const uid = obj.UID;
          const period = obj.leavePeriod;
          const reason = obj.reason;
          const name = obj.name;
          const submitdate = `${day} ${month} ${year} at ${hours}:${minutes} ${AmorPm}`;
          const alldata = {
            _id: _id,
            uid: uid,
            name: name,
            period: period,
            reason: reason,
            submiton: submitdate,
          };
          applicationsinfo.push(alldata);
        });
        res.status(200).json({ applicationsinfo });
      } else {
        res.status(404).json({ error: "no data available" });
      }
    } catch (error) {
      console.log(error);
    }
  },
  getAttendace: (req, res) => {
    try {
      // Today Date
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1; // Add 1 to get month number from 1-12
      const day = today.getDate();
      const date = `${day}-${month}-${year}`;
      //
      attendanceModel
        .findOne({ date: date })
        .then((doc) => {
          if (doc) {
            let matched = doc.attendance.filter(
              (record) => record.status === "Pending"
            );
            if (matched.length !== 0) {
              console.log(matched);
              res.status(200).json({ attendance: matched });
              return;
            } else {
              res.status(404).json({ error: "no documents found" });
              return;
            }
          } else {
            res.status(404).json({ error: "no documents found" });
            return;
          }
        })
        .catch((error) => {
          console.log(error);
          res.status(404).json({ error: " No Documents Found" });
        });
    } catch (error) {
      console.log(error);
    }
  },

  getPresent: (req, res) => {
    try {
      // Today Date
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1; // Add 1 to get month number from 1-12
      const day = today.getDate();
      const date = `${day}-${month}-${year}`;
      //

      attendanceModel
        .findOne({ date: date })
        .then((doc) => {
          if (doc) {
            let matched = doc.attendance.filter(
              (record) => record.status === "Present"
            );
            if (matched.length !== 0) {
              res.status(200).json({ attendance: matched });
              return;
            } else {
              res.status(404).json({ error: "no documents found" });
              return;
            } 
          } else {
            res.status(404).json({ error: "no documents found" });
            return;
          }
        })
        .catch((error) => {
          console.log(error);
          res.status(404).json({ error: " No Documents Found" });
        });
    } catch (error) {
      console.log(error);
    }
  },
  getAbsent: (req, res) => {
    try {
      // Today Date
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1; // Add 1 to get month number from 1-12
      const day = today.getDate();
      const date = `${day}-${month}-${year}`;
      //
      attendanceModel
        .findOne({ date: date })
        .then((doc) => {
          if (doc) {
            let matched = doc.attendance.filter(
              (record) => record.status === "Absent"
            );
            if (matched.length !== 0) {
              res.status(200).json({ attendance: matched });
              return;
            } else {
              res.status(404).json({ error: "no documents found" });
              return;
            }
          } else {
            res.status(404).json({ error: "no documents found" });
            return;
          }
        })
        .catch((error) => {
          console.log(error);
          res.status(404).json({ error: " No Documents Found" });
        });
    } catch (error) {
      console.log(error);
    }
  },
  confirmAttendance: (req, res) => {
    try {
      const uid = req.body.data;
      if (uid) {
        // Today Date
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Add 1 to get month number from 1-12
        const day = today.getDate();
        const date = `${day}-${month}-${year}`;
        //
        attendanceModel
          .findOneAndUpdate(
            { date: date, "attendance.UID": uid },
            { $set: { "attendance.$.status": "Present" } }
          )
          .then(() => {
            res.status(200).json({ success: true });
          })
          .catch((error) => {
            console.log(error);
            res.status(500);
          });
      } else {
        res.status(404).json({ error: "no UID found" });
      }
    } catch (error) {
      console.log(error);
    }
  },
  confirmAbsent: (req, res) => {
    try {
      const uid = req.body.data;
      if (uid) {
        // Today Date
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Add 1 to get month number from 1-12
        const day = today.getDate();
        const date = `${day}-${month}-${year}`;
        //

        attendanceModel
          .findOneAndUpdate(
            { date: date, "attendance.UID": uid },
            { $set: { "attendance.$.status": "Absent" } }
          )
          .then(() => {
            res.status(200).json({ success: true });
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
          });
      } else {
        res.status(404).json({ error: "UID Not Provided" });
      }
    } catch (error) {
      console.log(error);
    }
  },
  blockEmployee: (req, res) => {
    try {
      const uid = req.body.uid;
      if (uid) {
        employeeModel
          .findOneAndUpdate({ UID: uid }, { $set: { status: "Blocked" } })
          .then(() => {
            res.status(200).json({ success: true });
          });
      } else {
        res.status(422).json({ error: "UID not provided" });
      }
    } catch (error) {
      console.log(error);
    }
  },
  unblockEmployee: (req, res) => {
    try {
      const uid = req.body.uid;
      if (uid) {
        employeeModel
          .findOneAndUpdate({ UID: uid }, { $set: { status: "Offline" } })
          .then(() => {
            res.status(200).json({ success: true });
          });
      } else {
        res.status(422).json({ error: "UID not provided " });
      }
    } catch (error) {
      console.log(error);
    }
  },

  geteditEmployee: (req, res) => {
    try {
      const uid = req.params.id;
      employeeModel.findOne({ UID: uid }).then((doc) => {
        if (doc) {
          const data = doc;
          res.status(200).json({ data });
        } else {
          res.status(404).json({ error: "Document Not Found " });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  posteditEmployee: (req, res) => {
    try {
      const uid = req.body.uid;
      const data = req.body; // Puting the data in to a variable
      const { password } = data.formData;
      if (uid) {
        employeeModel.findOne({ UID: uid }).then((doc) => {
          if (doc) {
            employeeModel
              .findOneAndUpdate(
                { UID: uid },
                {
                  $set: {
                    fullname: data.formData.fullname,
                    place: data.formData.place,
                    position: data.formData.position,
                    role: data.formData.role,
                    email: data.formData.email,
                    phone: data.formData.phone,
                    salary: data.formData.salary,
                  },
                }
              )
              .then(() => {
                employeeModel.findOne({ UID: uid }).then((doc) => {
                  if (doc.password === password) {
                    res.status(200).json({ success: true });
                  } else {
                    const saltRounds = 10;
                    const hashedPassword = bcrypt.hashSync(
                      password,
                      saltRounds
                    );

                    employeeModel
                      .findOneAndUpdate(
                        { UID: uid },
                        {
                          $set: {
                            password: hashedPassword,
                          },
                        }
                      )
                      .then(() => {
                        res.status(200).json({ success: true });
                      });
                  }
                });
              });
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  removeEmployee: (req, res) => {
    try {
      const uid = req.body.data;

      employeeModel
        .findOneAndUpdate(
          { UID: uid },
          {
            $set: {
              status: "Removed",
            },
          }
        )
        .then(() => {
          res.status(200).json({ success: true });
        })
        .catch((error) => {
          res.status(500).json({ error: "Internal Server Error" });
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  },
  replaceEmployee: (req, res) => {
    try {
      const uid = req.body.data;

      employeeModel
        .findOneAndUpdate(
          { UID: uid },
          {
            $set: {
              status: "Offline",
            },
          }
        )
        .then(() => {
          res.status(200).json({ success: true });
        })
        .catch((error) => {
          res.status(500).json({ error: "Internal Server Error" });
        });
    } catch (error) {
      console.log(error);
    }
  },
  checkDepartment:(req,res)=>{
    try{

      const name = req.body.name;
      departmentModal.findOne({
        name:name,
      }).then((doc)=>{
        if(doc){
          res.status(409).json({error:"Name Already Exist"})
        }else{
          res.status(200).json({success:true})       
        }
      }).catch((error)=>{
        console.log(error)
        res.status(500).json({error:"Internal Server Error"})
      })
    }catch(error){
      res.status(500).json({ error:"Internal Server Error" })
      console.log(error)
    }
  },
  addDepartment:(req,res)=>{
    try{

      const name = req.body.name;
      if(name){
        DepartmentModel.create({
          name:name
        }).then(()=>{
          res.status(200).json({ success:true })
        }).catch((error)=>{
          console.log(error)
          res.status(500).json({error:"Internal Server Error"});
        })
      }
    }catch(error){
      console.log(error);
      res.status(500).json({error:"Internal Server Error"}) 
    }
  },
  getDepartments:(req,res)=>{
    departmentModal.find({}).then((doc)=>{
      if(doc){
        const data = doc;
        res.status(200).json({data});
      }else{
        res.status(404).json({error:"No Documents found"})
      }
    }).catch((error)=>{
      console.log(error);
      res.status(500).json({error:"Internal Server Error"})
    })
  },
  departmentInfo:(req,res)=>{
    const id = req.params.id;
    const objId = mongoose.Types.ObjectId(id)
    departmentModal.findOne({_id:objId}).then((doc)=>{
      if(doc){
        const dep = doc.name;
        employeeModel.find({
          department:dep
        }).then((document)=>{
          const data = document;
          res.status(200).json({data})
        }).catch((error)=>{
          res.status(500).json({error:"Internal server error"})
          console.log(error);
        })
      }
    })
  }

};  
