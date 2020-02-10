const { Router } = require("express");
const Image = require("../server/image/model");
const router = new Router();
const bodyParser = require("body-parser");

router.get(
  "/image",
  (request, response, next) =>
    Image.findAll().then(images => {
      response.json(images);
      console.log("Message from findaAll at 4000/image");
    })
  // // this doesnt work: why?
  // .then(
  //   response.json({
  //     message: "images requested"
  //   })
  // )
);

module.exports = router;
