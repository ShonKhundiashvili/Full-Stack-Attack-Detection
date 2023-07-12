const express = require("express");
const router = express.Router();
const allQueries = require("../models/Queries");

router.post("/", async function (req, res) {
  try {
    const { password, email, firstName, lastName, country, status } = req.body;

    const userExists = await allQueries.checkUserExists(email);
    if (userExists)
      return res.status(400).send("You are already registered please login");

    const userInserted = await allQueries.insertUser(
      email,
      password,
      firstName,
      lastName,
      country,
      status
    );
    if (userInserted === false)
      return res
        .status(500)
        .send("Some error occured while inserting the user");

    return res.status(200).send("Registered successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error adding user");
  }
});

module.exports = router;
