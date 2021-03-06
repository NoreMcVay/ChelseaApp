const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const playerModel = require('../models/player');

const mongodb = 'mongodb://localhost:27017/cfcApp';
mongoose.connect(mongodb, {useNewUrlParser: true});

router.get('/players', (req, res) => {
    playerModel
        .find()
        .then(doc => {
            console.log("All Player Details:", doc)
            res.send(doc);
        })
        .catch(err => {
            console.error(err)
        });
});


router.get('/player/:id', (req, res) => { 
    playerModel
        .find({_id: req.params.id}) 
        .then(doc => {   
            console.log("Selected Player Details:", doc)
            res.send(doc);
        })
        .catch(err => {
            console.error(err)
        });
});


router.post('/add-player', (req, res) => { console.log(req.body);
    let player = new playerModel({
        "firstname": req.body.firstname,
        "surname": req.body.surname,
        "age": req.body.age,
        "squadnumber": req.body.squadnumber,
        "previous": req.body.previous,
        "nationality": req.body.nationality
    });

    player.save()
        .then(doc => {
            console.log(doc);
        })
        .catch(err => {
            console.error(err)
        });
    res.send(console.log("working!!!!"));
});


router.put('/update-player', (req, res) => {
    console.log("req.body: ", req.body);
    playerModel.findByIdAndUpdate(req.body._id, { $set: {firstname: req.body.firstname, surname: req.body.surname, age: req.body.age, squadnumber: req.body.squadnumber, previous: req.body.previous, nationality: req.body.nationality}}, {new: true}, function (err, fighterModel) {
        if (err) return handleError(err);
        res.send(playerModel);
    });
});


router.delete('/delete-player/:id', (req, res) => {
    playerModel.deleteOne({_id: req.params.id}, function(err){
        if(err) return handleError(err);
        console.log("Deleted player with ObjectId: ", req.params.id);
        playerModel
            .find()
            .then(doc => {
                console.log("All Fighter Details Returned as part of Delete data refesh process:", doc)
                res.send(doc);
            })
            .catch(err => {
                console.error(err)
            })
    });
});


module.exports = router;
