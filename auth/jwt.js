const jwt = require("jsonwebtoken");

//Create jsonwebtoken:

const secret =
  process.env.JWT_SECRET || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m";

// this function generates a JWT for the user
function toJWT(data) {
  return jwt.sign(data, secret, { expiresIn: "2h" });
}
// This function checks whether the database JWT corrensponds with the user, when the user tries to login
function toData(token) {
  return jwt.verify(token, secret);
}
module.exports = { toJWT, toData };
