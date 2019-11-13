import jwt from "jsonwebtoken";
import config from "../../config";

const checkToken = (req, res, next) => {
  // Express headers are auto converted to lowercase
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  if (token) {
    if (token.startsWith("Bearer ")) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }

    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized"
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Auth token is not supplied"
    });
  }
};

export default checkToken;
