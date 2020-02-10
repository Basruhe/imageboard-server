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

app.use(imageRouter);

app.listen(port, () => {
  console.log("Express server listening on", port);
});

// Postgres server port: 5432
// Host port: 3000
// Express server port: 4000
