const mongoose = require("mongoose");

const leaveApplicationSchema = new mongoose.Schema({
  submiton: {
    type: Date,
  },
  UID: {
    type: String,
  },
  name: {
    type: String,
  },
  leavePeriod: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  reason: {
    type: String,
  },
  section:{
    type:String,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Application", leaveApplicationSchema);
