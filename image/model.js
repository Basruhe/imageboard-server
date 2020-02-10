const Sequelize = require("sequelize");
const db = require("../db");

const Image = db.define("image", {
  title: Sequelize.STRING,
  url: Sequelize.STRING
});

module.exports = Image;
