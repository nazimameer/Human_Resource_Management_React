const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const employeeModel = require("../models/employeeModel");
const applicationModel = require("../models/leaveApplication");

const secretKey = "Brototype";
const hrModel = require("../models/hrModel");
const { default: mongoose } = require("mongoose");
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
    const checkemail = req.body.email;
    console.log("checked email:  " + checkemail);
    const gotit = await employeeModel.findOne({
      email: checkemail,
    });

    if (!gotit) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ error: "email already taken" });
    }
  },
  getApplications: async (req, res) => {
    const applicationsinfo = [];
    const applications = await applicationModel.find({ status: "Pending" });
    if (applications.length != 0) {
       await applications.forEach((obj) => {
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
  
        const uid = obj.UID;
        const period = obj.leavePeriod;
        const reason = obj.reason;
        const name = obj.name;
        const submitdate = `${day} ${month} ${year} at ${hours}:${minutes} ${AmorPm}`;
      const alldata = {
          uid: uid,
          name:name,
          period: period,
          reason: reason,
          submiton:submitdate,
        };
        applicationsinfo.push(alldata);
  
      })


      res.status(200).json({ applicationsinfo });
    } else {
      res.status(400).json({ error: "no data available" });
    }
  },

  applicApprove: async (req, res) => {
    const id = req.body.id;
    const objid = mongoose.Types.ObjectId(id);
    const update = await applicationModel.updateOne(
      { _id: objid },
      { $set: { status: "Approved" } }
    );
    res.status(200).json({ success: true });
  },
  applicReject: async (req, res) => {
    const id = req.body.id;
    const objid = mongoose.Types.ObjectId(id);
    const update = await applicationModel.updateOne(
      { _id: objid },
      { $set: { status: "Rejected" } }
    );

    res.status(200).json({ success: true });
  },

  addEmployee: async (req, res) => {
    try {
      // Handle error
      const data = req.body; // Puting the data in to a variable
      console.log(data);
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
    const employees = await employeeModel.find({});
    const length = employees.length;
    res.status(200).json({
      status: true,
      employees,
      length,
    });
  },
  getApproved: async (req, res) => {
    const applications = await applicationModel.find({ status: "Approved" });
    if (applications.length != 0) {
      res.status(200).json({ applications });
    } else {
      res.status(404).json({ error: " no data available" });
    }
  },
  getRejected: async (req, res) => {
    const applications = await applicationModel.find({ status: "Rejected" });
    if (applications.length != 0) {
      res.status(200).json({ applications });
    } else {
      res.status(404).json({ error: "no data available" });
    }
  },
};
