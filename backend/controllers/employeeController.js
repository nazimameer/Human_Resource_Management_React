const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const employeeModel = require("../models/employeeModel");
const applicationModel = require('../models/leaveApplication')
const jwt = require('jsonwebtoken')
const secretKey = "Brototype";
module.exports = {
  LoginPageAuth:(req,res)=>{
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ").pop();
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(500).json({ error: "Authentication failed" });
      } else {
        console.log(decoded)
        res.status(200).json({ success: true });
      }
    });
  }, 
  postLogin:async (req, res) => {
    console.log("haldj")
    const data = req.body;
    const user = await employeeModel.findOne({
      email:data.username
    })

    if(user){
      const inputPassword = data.password;
      const  { password }  = user;
      const isMatch = await bcrypt.compare(inputPassword, password)

      if(isMatch){ 
 
        //jwt generates

        // Payload
        const payload ={
          id:user.id,
          uid:user.UID,
          email:user.email
        }
          // Secret Key
        const secretKey = 'Brototype'

        // Expire 
         const expire = {
            expiresIn: 84000
         };

         // Sign Token 
         const token = jwt.sign(payload, secretKey, expire);
         res.status(200).json({success:true, token:token})

      }else{
      res.status(400).json({error:"Incorrect Password"});
      }
    }else{
      res.status(401).json({error:"Invalid Username or Password"});
    }
  },
  LeaveApplication:async(req,res)=>{
    const data = req.body;
    const leavePeriod = data.leaveperiod;
    if(leavePeriod === "Half Day"){
      const now  = new Date();
      const UID = req.uid;
      const reason = data.reason;
      await applicationModel.create({
        submiton:now,
        UID:UID,
        leavePeriod:"Half Day",
        reason:reason,
      })
    }else if(leavePeriod === "Full Day"){

      const now = new Date();
      const UID = req.uid;
      const reason = data.reason;
      const d1 = new Date(data.from)
      const d2 = new Date(data.to)
      const diffInMs = Math.abs(d2.getTime() -d1.getTime())
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 *  24))
      await applicationModel.create({
        UID: UID,
        submiton:now,
        leavePeriod:diffInDays,
        reason:reason,
        from:d1,
        to:d2
      })
    }
  },

  getApplication:async(req,res)=>{
    const uid = req.uid;
    const applications = await applicationModel.find({UID:uid});
    const applicationsinfo = [];
    const data = await applications.forEach((obj)=>{
      const date = obj.submiton;
      const year = date.getFullYear();
      const month = date.toLocaleString('default', { month: 'long' });
      const day = date.getDate().toString().padStart(2, '0');
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');

      let AmorPm = "AM";
      if (hours >= 12) {
        AmorPm = 'PM';
      }

      if (hours > 12) {
        hours -= 12;
      }

     const submitdate = `${day} ${month} ${year} at ${hours}:${minutes} ${AmorPm}`;
     const reason = obj.reason;
     const alldata ={
      submitdate:submitdate,
      reason:reason
     }
      applicationsinfo.push(alldata)

    })

    console.log(applicationsinfo)

      res.status(200).json({ applicationsinfo })
  
  }
};
