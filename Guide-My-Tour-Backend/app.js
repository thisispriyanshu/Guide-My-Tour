//jshint esversion:6

require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const routes = require('./routes/trip');
const https = require("https");
const app = express();
const Cors= require("cors");


app.use(express.json());
app.use(Cors());


app.use('/', routes);

//import mongoose
const mongoose = require('mongoose');
const db = 'mongodb+srv://your-guide-tour:8920592276@cluster0.fscay.mongodb.net/trips?retryWrites=true&w=majority';
// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, './.env') });

//establish connection to database
mongoose.connect(
  'mongodb+srv://your-guide-tour:givemeall@cluster0.fscay.mongodb.net/trips?retryWrites=true&w=majority',
    //{useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
      {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

app.set('view engine', 'ejs');

//app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(__dirname + "/public"));

// app.get("/", function(req, res) {
//   res.render("home");
// })

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
