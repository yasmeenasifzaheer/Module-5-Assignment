const jwt = require("jsonwebtoken");

/**
 * Generate JWT Token
 * @param {Object} payload - Data to store inside token (user id, role)
 * @returns {String} token
 */
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });
};

/**
 * Verify JWT Token
 * @param {String} token
 * @returns {Object} decoded payload
 */
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken
};
