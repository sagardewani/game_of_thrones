const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const db = process.env.MONGO_URI;

const initDB = async () => {
  try {
    const connection = await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = initDB;
