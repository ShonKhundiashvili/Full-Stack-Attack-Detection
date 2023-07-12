const db = require("../models/Connection");
const config = require("../config.json");

const checkUserExists = async (email) => {
  return new Promise(async (resolve, reject) => {
    const userCollection = db.collection("Users");
    userCollection.findOne({ email }, (err, user) => {
      if (err) return reject(err);
      if (!user) return resolve(false);
      return resolve(true);
    });
  });
};

const insertUser = async (
  email,
  password,
  firstName,
  lastName,
  country,
  status
) => {
  const usersCollection = db.collection("Users");

  const user = {
    email,
    password,
    firstName,
    lastName,
    country,
    status,
    activated: false,
    logins: 0,
    lastTimeLogin: new Date(),
  };

  return new Promise(async (resolve, reject) => {
    const insertedUser = await usersCollection.insertOne(user);
    if (!insertedUser) {
      console.log("Could not push user to Users");
      return resolve(false);
    }

    const insertedPassword = await insertPasswordHistory(email, password);

    if (!insertedPassword) {
      console.log("Something went wrong");
      return resolve(false);
    }

    console.log("Inserted to password history and Users");
    return resolve(true);
  });
};

const insertPasswordHistory = async (email, password) => {
  const currentDate = new Date();

  return new Promise(async (resolve, reject) => {
    const passwordCollection = db.collection("passwordHistory");
    const passwordObject = {
      email,
      password,
      currentDate,
    };
    const isBiggerThanThreePassword = await isMoreThan3Passwords(email);
    if (isBiggerThanThreePassword) await deleteOldPasswordHistory(email);
    await passwordCollection.insertOne(passwordObject, (err) => {
      if (err) return reject(err);
      return resolve(true);
    });
  });
};

//Returns true or false if the password is more than 3 times in the database
const isMoreThan3Passwords = async (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const passwordHistoryCollection = db.collection("passwordHistory");
      const count = await passwordHistoryCollection.countDocuments({ email });

      resolve(count >= config.password_history);
    } catch (error) {
      return reject(error);
    }
  });
};

const deleteOldPasswordHistory = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const passwordHistoryCollection = db.collection("passwordHistory");
      const oldestPassword = await passwordHistoryCollection.findOne(
        { email },
        { sort: { creationDate: 1 } }
      );

      if (!oldestPassword) {
        console.log("No oldest password found");
        return resolve(true);
      }

      const { creationDate } = oldestPassword;
      await passwordHistoryCollection.deleteOne({ email, creationDate });

      console.log("Removed oldest password successfully");
      return resolve(true);
    } catch (error) {
      console.error("Error removing oldest password:", error);
      return reject(error);
    }
  });
};

const lastTimeLogin = async (email) => {
  return new Promise(async (resolve, reject) => {
    const user = await db.collection("Users").findOne({ email }, (err) => {
      if (err) return reject(err);
      if (user) return resolve(user.lastTimeLogin);
    });
  });
};

const resetLogins = async (email, db) => {
  return new Promise(async (resolve, reject) => {
    await db
      .collection("Users")
      .updateOne({ email }, { $set: { logins: 0 } }, (err) => {
        if (err) return reject(err);
        return resolve(true);
      });
  });
};

const updateTimeStamp = async (email, db) => {
  return new Promise(async (resolve, reject) => {
    await db
      .collection("Users")
      .findOneAndUpdate(
        { email },
        { $currentDate: { lastTimeLogin: true } },
        (err) => {
          if (err) return reject(err);
          return resolve(true);
        }
      );
  });
};

const countLogins = async (email, db) => {
  return new Promise(async (resolve, reject) => {
    const user = await db.collection("Users").findOne({ email }, (err) => {
      if (err) return reject(err);
      if (user && user.logins >= config.login_attempts) return resolve(true);
    });
  });
};

module.exports = {
  checkUserExists,
  insertUser,
  insertPasswordHistory,
  isMoreThan3Passwords,
  deleteOldPasswordHistory,
  lastTimeLogin,
  resetLogins,
  updateTimeStamp,
  countLogins,
};
