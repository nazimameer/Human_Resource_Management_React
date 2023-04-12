const mongoose = require("mongoose");

module.exports = {
  dbconnect: async () => {
    try {
      mongoose.connect(process.env.MONGO_CONNECT).then(() => {
        console.log("dbconnected");
      });
    } catch (error) {
      console.log("db not connect:" + error);
    }
  },
};
