const jwt = require("jsonwebtoken")
const sessionIdToUserMap = new Map();

const secret = "test@jwt"

function setUser(user) {
  return jwt.sign({_id: user._id, email: user.email}, secret);
}

function getUser(id) {
  return sessionIdToUserMap.get(id);
}

module.exports = {
  setUser,
  getUser,
};