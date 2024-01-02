const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    courses: {
        type: Object,
        required: true
    }
      ,
    studentID: {
        type: String,
        required: true
    }
});

const Course = mongoose.model('Course', courseSchema);


module.exports = Course;