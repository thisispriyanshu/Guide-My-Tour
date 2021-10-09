//import tea model
const Trip = require('../models/trip');

// newTrip function for post trip route

const newTrip = (req, res, next) => {
    res.json({message: "POST new trip"}); // dummy function for now
};

const getAllTrip = (req, res, next) => {
    res.json({message: "Getting all existing trip"});
};

const deleteAllTrip = (req, res, next) => {
    res.json({message: "Deleting all trips"});
};

const getOneTrip = (req, res, next) => {
    res.json({message: "GET one trip"});
};

const newComment = (req, res, next) => {
    res.json({message: "Posting a new comment"});
};

const deleteOneTrip = (req, res, next) => {
    res.json({message: "deleting an existing trip"});
};

module.exports = {
                  newTrip,
                  getAllTrip,
                  deleteAllTrip,
                  getOneTrip,
                  newComment,
                  deleteOneTrip
                };
