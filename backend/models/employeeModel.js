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
  
  department:{
    type: String
  },
  status:{
    type:String,
    default: "Offline"
  },
  pic:{ type: String, default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},
  salary:{ 
    type:Number,
  },
  accountNo:{
    type:Number,
    default:0000000000000
  },
  ifsc:{
    type:String,
    default:"Not Provided"
  },
  holdername:{
    type:String,
    default:"Not Provided"
  }
},
{
  timestamps: true
});

module.exports = mongoose.model("employee", employeeSchema);
