const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
// const db = require("./db");
// const Image = require("./image/model");
const imageRouter = require("../server/router");
const bodyParser = require("body-parser");
const cors = require("cors");

const corsMiddleware = cors();
app.use(corsMiddleware);
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

const authRouter = require("./auth/router");
app.use(authRouter);

const userRouter = require("./user/router");
app.use(userRouter);

app.use(imageRouter);

app.listen(port, () => {
  console.log("Express server listening on", port);
});

// Postgres server port: 5432
// Host port: 3000
// Express server port: 4000

// To start this project:
// Start or create new docker container (3000/5432)
// npm run start (or nodemon index.js)
