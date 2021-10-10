//jshint esversion:6

require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const routes = require('./routes/trip');
const https = require("https");
const helmet = require('helmet');
const compression = require('compression');
const Cors= require('cors');
const app = express();
const Cors= require("cors");


app.use(helmet());
app.use(compression());

app.use(express.json());
app.use(Cors());

app.use('/', routes);

// add this below app.use("/", routes) to make index.html a static file
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});


app.use('/uploads', express.static('./uploads'));

//import mongoose
const mongoose = require('mongoose');

//establish connection to database
mongoose.connect(
  process.env.MONGODB_URI,
  { 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    //server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    //replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  },
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

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
