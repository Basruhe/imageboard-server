// note: This routerfile should be in the image folder?!
const { Router } = require("express");
const Image = require("../server/image/model");
const router = new Router();

router.get(
  "/image",
  (request, response, next) =>
    Image.findAll().then(images => {
      response.json(images);
      console.log("Message from findAll at 4000/image");
    })
  // // this doesnt work: why?
  // .then(
  //   response.json({
  //     message: "images requested"
  //   })
  // )
);

// router.post("/image", (request, response, next) => {
//   Image.create(request.body).then(image => {
//     response.json(image);
//     console.log("Message from POST at 4000/image");
//   });
// });

// To test: http :3000/image title=x url=y
router.post("/image", async function(request, response, next) {
  try {
    const image = await Image.create(request.body);
    image
      ? response.send(image)
      : response.status(404).send("Error: page not found");
  } catch (error) {
    next(error);
  }
});

// TODO: image delete

module.exports = router;
