const mongoose = require('mongoose');
let ScoresSchema = mongoose.Schema({



    eqOpr: {
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
    }
    // User: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]


});
module.exports = mongoose.model('Scores', ScoresSchema);
