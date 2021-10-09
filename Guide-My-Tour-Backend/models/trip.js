const mongoose = require("mongoose");

//trip schema

const TripSchema = new mongoose.Schema({
    name: {type:String, required:true},
    image: String,
    description: String,
    keywords: String,
    origin: String,
    temperature: Number,
    // comments: [{ text: String, date: {type:String, default: new Date()} }]
});

const Trip = mongoose.model('Trip', TripSchema); //convert to model named Trip
module.exports = Trip;
