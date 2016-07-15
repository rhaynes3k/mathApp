const mongoose = require('mongoose');
let ScoresSchema = mongoose.Schema({

    submitted : {type : Date, default: Date.now},
    quizType: {
        type: String,
        required: true
    },

    numRight: {
        type: Number,
        required: true
    },
    outOf: {
        type: Number,
        required: true
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }


});
module.exports = mongoose.model('Scores', ScoresSchema);


// let dateSchema = mongoose.Schema({
//     lastLogin: {
//         type: Date,
//         required: true
//     },
//     currentLogin: {
//         type: Date,
//         required: true
//     }
// });
