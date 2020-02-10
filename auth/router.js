const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const router = new Router();

// define endpoints here

// This post returns a JWT when email+password are entered
// test with: http :4000/login email='alice@wonderland.com' password=downtherabbithole
// for now: there is no actual login (since there is no database table for users and no interaction)
router.post("/login", (request, response, next) => {
  try {
    const user = request.body.user;
    const email = request.body.email;
    console.log("User and email entered");
    response.send({
      jwt: toJWT({ userId: 1 })
    });
  } catch {
    response.status(400).send({
      message: "Please supply a valid email and password"
    });
  }
});

// The following endpoint is only accessible with the  JWT. Code from reader)
// The JWT Is generated after the router.post("/login' etc) is run. You test with: http 4000/secret-endpoint Authorization:"Bearer <JWT HERE!>"
router.get("/secret-endpoint", (req, res) => {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      res.send({
        message: "Thanks for visiting the secret endpoint.",
        data
      });
    } catch (error) {
      // this will send the appropriate error message
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`
      });
    }
  } else {
    res.status(401).send({
      message: "Please supply some valid credentials"
    });
  }
});

// If you would like to make a request to a secret route (:4000/secret-endpoint), you would use the JWT token like this:
// http :4000/secret-endpoint Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUzNTM2MjIzMCwiZXhwIjoxNTM1MzY5NDMwfQ.DxFRClbZLP0L-fczkSiNHEiLqYI4HGbC8Ezrh3JhlG8"

module.exports = router;
