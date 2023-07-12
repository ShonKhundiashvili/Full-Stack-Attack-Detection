const express = require("express");
const router = express.Router();
const allQueries = require("../models/Queries");

router.post("/", async function (req, res) {
  const { oldPassword, newPassword, confirmNewPassword } = req.body;
  const realPassword = await allQueries.findUserPassword(); //how to use sessions? i dont want email here
});

module.exports = router;
