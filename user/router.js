const { Router } = require("express");
const { User } = require("./model");
const router = new Router();
const bcrypt = require("bcrypt");

// Creating a new user.
// To test: http :4000/user email=x password=y
router.post("/user", async function(request, response, next) {
  try {
    const user = await User.create(request.body);
    user ? response.send(user) : response.status(404).send("Error");
  } catch (error) {
    next(error);
  }
});

// // Normal style function: just for practice
// router.post("/user", (request, response, next) => {
//   User.create(request.body).then(user => {
//     response.json(user);
//     console.log("Message from POST at 4000/user");
//   });
// });

module.exports = router;
