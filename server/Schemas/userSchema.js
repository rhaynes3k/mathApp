const mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
    // time : {type : Date, default: Date.now},
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    currentDate: {
        type: Date,
        require: true
    },
    previousDate: {
        type: Date
    },
    scores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scores'
    }]

});
module.exports = mongoose.model('User', UserSchema);
