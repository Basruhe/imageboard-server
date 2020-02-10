const Sequelize = require("sequelize");
const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:3000/postgres";
const db = new Sequelize(databaseURL);
// Note: when do you import as sequelize, Sequelize, {Sequelize}?

// test this too:
// db.sync(() => {
//   console.log("Database synced")
// }
db.sync().then(() => console.log("Database synced"));

module.exports = db;
