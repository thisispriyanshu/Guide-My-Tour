const mongoose = require("mongoose");

//trip schema

const TripSchema = new mongoose.Schema({
    id: Number,
    placeName: {type:String, required:true},
    imgUrl: String,
    influencerName: String,
    location: String,
    description: String,
    // comments: [{ text: String, date: {type:String, default: new Date()} }]
});

const Trip = mongoose.model('Trip', TripSchema); //convert to model named Trip
module.exports = Trip;
