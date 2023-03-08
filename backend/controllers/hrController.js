const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const employeeModel = require("../models/employeeModel");

const secretKey = "Brototype";
const hrModel = require("../models/hrModel");
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

  addEmployee: async (req, res) => {
    try {
      // Handle error
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
          firstname: data.firstname,
          lastname: data.lastname,
          position: data.position,
          role: data.role,
          email: data.email,
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
};
