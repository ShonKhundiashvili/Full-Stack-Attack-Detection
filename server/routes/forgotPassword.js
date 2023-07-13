const express = require("express");
const router = express.Router();
const allQueries = require("../models/Queries");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sha1 = (data) => {
  return crypto.createHash("sha1").update(data).digest("hex");
};

const sendConfirmationEmail = async (email, hashedValue) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "This is your new password",
      html: `<h1>Confirmation Code</h1>
              <p>Please use this as your new password until you change it</p>
              <p>${hashedValue}</p>
            </div>`,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

router.post("/", async function (req, res) {
  try {
    const code = Math.floor(Math.random() * 1000000);
    const hashedValue = sha1(code.toString());
    const { email } = req.body;

    const userExists = await allQueries.checkUserExists(email);

    if (!userExists) return res.status(404).send("Error: User does not exist");

    await allQueries.changeUserPasswordFromEmail(email, hashedValue);
    const isSent = await sendConfirmationEmail(email, hashedValue);
    if (!isSent) return res.status(500).send("Error sending email");
    return res.status(200).send("Sent a new password, please check your email");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error in the backend");
  }
});

module.exports = router;
