const mongoose = require('mongoose');


const pastQuestionsSchema = new mongoose.Schema({
    course: {
        type: String
    },

    endPoints: {
        type: [String]
    }
})


const PastQuestionsSchema = mongoose.model('pastquestionsSchema', pastQuestionsSchema);

module.exports = PastQuestionsSchema;