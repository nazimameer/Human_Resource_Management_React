const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;
module.exports = {
  verifyToken: (req, res, next) => {
    try{
      const authHeader = req.headers.authorization;
      if (authHeader == undefined) {
        res.status(401).send({ error: "No Token Provided" });
        return;
      }
      const token = authHeader.split(" ").pop();
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          res.status(500).send({ error: "Authentication failed" });
          return;
        } else {
          req.id = decoded.id;
          req.uid = decoded.uid;
          next();
        }
      }); 
    }catch(error){
      console.log(error)
    }
  },
};
