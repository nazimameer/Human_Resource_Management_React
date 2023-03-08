const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  UID: {
    type:Number
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  position: {
    type: String,
  },
  role: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("employee", employeeSchema);
