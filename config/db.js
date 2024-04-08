const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.iuzir.mongodb.net/mern-project",{}
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

  const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS +"@cluster0.ocegpti.mongodb.net/test/user",
    {}
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));