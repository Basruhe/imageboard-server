const { Router } = require("express");
const { User } = require("./model");
const router = new Router();
const bcrypt = require("bcrypt");

// Creating a new user. This is the 'signup endpoint'
// To test: http :4000/user email=x password=y
// router.post("/user", async function(request, response, next) {
//   try {
//     const user = await User.create(request.body);
//     user ? response.send(user) : response.status(404).send("Error");
//   } catch (error) {
//     next(error);
//   }
// });

// // Normal style function: just for practice
// router.post("/user", (request, response, next) => {
//   User.create(request.body).then(user => {
//     response.json(user);
//     console.log("Message from POST at 4000/user");
//   });
// });

// rewritten for bcrypt
router.post("/user", (request, response, next) => {
  const { email, password } = request.body;
  User.create({
    email: email,
    password: bcrypt.hashSync(password, 10)
  });
  // .then(user => {
  //   response.json(user);
  // });

  // request.body).then(user => {
  // response.json(user);
  console.log("Message from POST at 4000/user");
});

module.exports = router;
