const express = require("express");
const router = express.Router();
const allQueries = require("../models/Queries");
const config = require("../config.json");

router.post("/", async function (req, res) {
  try {
    const { email, password } = req.body;
    const userAuthentication = await allQueries.checkUserExists(email);

    if (!userAuthentication)
      return res
        .status(400)
        .send("No user found with the specified email please register");

    const currentTime = new Date();
    const lastTimeLogin = await allQueries.lastTimeLogin(email);
    const timeDiff = (currentTime.getTime() - lastTimeLogin.getTime()) / 60000;
    const countLogins = await allQueries.countLogins(email);

    //If he is blocked
    if (countLogins && timeDiff < config.block_duration) {
      return res
        .status(400)
        .send("You have attempted too many times. Try again later !");
    }
    //If the block duration has passed we reset the logins back to 0
    if (countLogins && timeDiff > config.block_duration)
      await allQueries.resetLogins(email);

    const realPassword = await allQueries.findUserPassword(email);

    if (password !== realPassword) {
      await allQueries.incrementLogins(email);
      //If his password is not correct we increment the loging by 1
      const countLogins = await allQueries.countLogins(email);
      //If count logins is more or equals than 3 we need to update the last time he tried to enter and update time stamp
      if (countLogins) {
        //Updating the time oh his last try to log in
        await allQueries.updateTimeStamp(email);
        return res
          .status(400)
          .send("You have attempted too many times. Try again later!");
      }
      return res
        .status(400)
        .send("Password or email are wrong! Please try again");
    }
    await allQueries.resetLogins(email);
    return res.status(200).send("Login succeeded");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error adding user");
  }
});

module.exports = router;
