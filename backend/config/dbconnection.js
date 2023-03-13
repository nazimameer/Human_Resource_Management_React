const mongoose = require("mongoose");

module.exports = {
  dbconnect: async () => {
    try {
      mongoose.connect("mongodb://localhost:27017/HRM").then(() => {
        console.log("dbconnected");
      });
    } catch (error) {
      console.log("db not connect:" + error);
    }
  },
};
