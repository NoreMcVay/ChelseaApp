const mongoose = require('mongoose');

let playerSchema = new mongoose.Schema({
    firstname: String,
    surname: String,
    age: Number,
    squadnumber: Number,
    previous: String,
    nationality: String
});

module.exports = mongoose.model('Player', playerSchema);