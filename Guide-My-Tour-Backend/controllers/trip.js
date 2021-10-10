//import trip model
const Trip = require('../models/trip');
const multer = require('multer');
const upload = multer();

// newTrip function for post trip route

//GET all trips
const getAllTrip = (req, res) => {
    Trip.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};


//DELETE trips
const deleteAllTrip = (req, res) => {
    Trip.deleteMany({}, err => {
        if(err) {
          return res.json({message: "Complete delete failed"});
        }
        return res.json({message: "Complete delete successful"});
    })
};


const getOneTrip = (req, res) => {
    let placeName = req.params.placeName; //get the trip name

    //find the specific trip with that name
    Trip.findOne({placeName: placeName}, (err, data) => {
    if(err || !data) {
        return res.json({message: "Trip doesn't exist."});
    }
    else return res.json(data); //return the trip object if found
    });
};
  
//POST tea
const newTrip = (req, res) => {
    //check if the tea name already exists in db
    Trip.findOne({placeName:req.body.placeName},(data)=>{

        //if tea not in db, add it
        if(data===null){
            //create a new tea object using the Tea model and req.body
            let newTrip = new Trip({
                id: req.body.id,
                placeName:req.body.placeName,
                imgUrl: req.file.path, 
                influencerName: req.body.influencerName,
                location: req.body.location,
                description: req.body.description,
            })

            // save this object to database
            newTrip.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        //if tea is in db, return a message to inform it exists            
        }else{
            let newTrip = new Trip({
                id: req.body.id,
                placeName:req.body.placeName,
                imgUrl: req.file.path, 
                influencerName: req.body.influencerName,
                location: req.body.location,
                description: req.body.description,
            })

            // save this object to database
            newTrip.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        }
    })    
};

//DELETE 1 trip
const deleteOneTrip = (req, res) => {
    let placeName = req.params.placeName; // get the name of trip to delete

    Trip.deleteOne({placeName:placeName}, (err, data) => {
    if(err || !data) {
        return res.json({message: "Trip doesn't exist."});
    }
    else return res.json({message: "Trip deleted."}); //deleted if found
    });
};




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadImg = multer({storage: storage}).single('imgUrl');


module.exports = {
    newTrip,
    uploadImg,
    getAllTrip,
    deleteAllTrip,
    deleteOneTrip,
    getOneTrip,
  };

