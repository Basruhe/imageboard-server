const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const db = require("./db");
const Image = require("./image/model");
const imageRouter = require("../server/router");

app.use(imageRouter);

app.listen(port, () => {
  // console.log(`Express server listening on ${port}`);
  console.log("Express server listening on", port);
});

// Postgres server port: 5432
// Host port: 3000
// Express server port: 4000
