const express = require("express");
const router = express.Router();
const allQueries = require("../models/Queries");

router.post("/", async function (req, res) {
  try {
    const { email, password } = req.body;
    const userAuthentication = await allQueries.checkUserExists(email, con);

    if (!userAuthentication)
      return res.status(400).send("No user found with the specified email");

    const currentTime = new Date();
    const lastTimeLogin = await allQueries.lastTimeLogin(email, con);
    const timeDiff = (currentTime.getTime() - lastTimeLogin.getTime()) / 60000;
    const countLogins = await allQueries.countLogins(email, con);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error adding user");
  }
});

module.exports = router;
