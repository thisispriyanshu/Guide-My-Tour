const express = require('express'); //import express
const multer = require('multer');
const upload = multer();


// 1.
const router  = express.Router(); 
// 2.
const tripController = require('../controllers/trip'); 
// 3.
router.post('/trip', upload.none(), tripController.newTrip); 
// 4. 
router.get('/trip', tripController.getAllTrip);
//5.
router.delete('/trip', tripController.deleteAllTrip);
//6.
router.get('/trip/:name', tripController.getOneTrip);
//7.
router.post('/trip/:name', tripController.newComment);
//8.
router.delete('/trip/:name', tripController.deleteOneTrip);

module.exports = router; // export to use in app.js
