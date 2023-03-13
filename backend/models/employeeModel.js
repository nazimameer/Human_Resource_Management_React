const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  UID: {
    type: Number,
  },
  fullname: {
    type: String,
  },
  place: {
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
  phone: {
    type: Number,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("employee", employeeSchema);
