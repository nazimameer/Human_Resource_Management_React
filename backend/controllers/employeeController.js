const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const employeeModel = require("../models/employeeModel");

module.exports = {
  postLogin: (req, res) => {
    const data = req.body;
    const user = employeeModel.findOne({
      email:data.username
    })
    
    if(user){
      const inputPassword = data.password;
      const { password } = user; 
      const isMatch = bcrypt.compare(inputPassword, password)

      if(isMatch){
        res.status(200).json({success:true})
      }else{
      res.status(400).json({error:"Invalid Password"});
      }
    }else{
      res.status(401).json({error:"Invalid Username or Password"});
    }
  },
};
