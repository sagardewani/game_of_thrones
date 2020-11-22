const express = require("express");
const app = require("express")();
const connectDB = require("./db");
var cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

const PORT_ADDRESS = process.env.APP_PORT || 5000;
app.listen(PORT_ADDRESS, () => console.log(`Server and socket started on port ${PORT_ADDRESS}`));
connectDB();

// var whitelist = ['http://localhost'];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

//Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

//Auth Routes
app.use("/", require("./routes/battle"));
