const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const employeeModel = require("../models/employeeModel");
const preusername = "nazim@gmail.com";
const prepassword = "123";

module.exports = {
  postLogin: (req, res) => {
    try {
      // Handle error
      const data = req.body; // Puting the data in to a variable
      const CurrentUserName = data.username; // Taking usename from provided data
      const CurrentPassword = data.password; // Taking password from provided data

      //Varifying with predefined username and password
      if (CurrentUserName === preusername && CurrentPassword === prepassword) {

        // Varification done

        // Jwt generates

        // Payload
        const payload = {
          username: CurrentUserName,
          password: CurrentPassword,
        };

        // Secret key
        const secretKey = "Brototype";

        // Expire
        const expire = {
          expiresIn: 86400,
        };

        // Sign token
        const token = jwt.sign(payload, secretKey, expire);

        res.status(200).json({ success: true, token: token }); // Send response with token
      } else {
        res.status(401).json({ error: "Invalid Username or Password" }); // Username or password would be wrong so send error msg
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server Busy.....!" }); // Catching error and send response
    }
  },

  addEmployee: async (req, res) => {
    try {
      // Handle error
      const data = req.body; // Puting the data in to a variable

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

      const RandomNumber = () => Math.floor(10000 + Math.random() * 90000); // generate a random number with 5 digits

      // Puting unique number into UID variable
      let UID;
      do {
        UID = RandomNumber();
      } while (UIDs.includes(UID));
//

      // Add user to db with uid
      await employeeModel
        .create({
          UID: UID,
          firstname: data.firstname,
          lastname: data.lastname,
          position: data.position,
          role: data.role,
          email: data.email,
          password: data.password,
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
    res.status(200).json({
      status:true,
      employees
    })
  },
};
