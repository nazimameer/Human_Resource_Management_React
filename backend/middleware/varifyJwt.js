const jwt = require("jsonwebtoken");
const secretKey = "Brototype";
module.exports = {
  verifyToken: (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader == undefined) {
      res.status(401).send({ error: "No Token Provided" });
    }
    const token = authHeader.split(" ").pop();
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(500).send({ error: "Authentication failed" });
      } else {
        console.log(decoded);
        req.uid = decoded.uid;
        next();
      }
    });
  },
};
