const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const router = new Router();
// define endpoints here

router.post("/login", (request, response, next) => {
  try {
    const user = request.body.user;
    const email = request.body.email;
    console.log("user and email entered");
    response.send({
      jwt: toJWT({ userId: 1 })
    });
  } catch {
    response.status(400).send({
      message: "Please supply a valid email and password"
    });
  }
});

module.exports = router;
