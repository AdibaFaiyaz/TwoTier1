const mongoose = require("mongoose");
const express = require("express");
const studentRoute = require("./controller/studentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const app = express();

mongoose.set("strictQuery",true);
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/studentRoute",studentRoute);

app.listen(4000,()=>{
    console.log("Server connected at 4000");
})
