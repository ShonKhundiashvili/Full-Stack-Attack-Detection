const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

try {
  const userName = process.env.USER_NAME;
  const password = process.env.PASSWORD;
  console.log(userName, password);
  const connectionString = `mongodb+srv://shonkhundiashvili:Qurmangaga979@atackometer.kqmzby9.mongodb.net/`;
  mongoose.connect(connectionString, { useNewUrlParser: true });
  const db = mongoose.connection;

  db.once("open", () => {
    console.log("Connected to the database");
  });

  module.exports = db;
} catch (error) {
  console.log(error);
}
