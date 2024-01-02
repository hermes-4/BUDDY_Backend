const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    courses: {
        type: Array,
        required: true
    }
      ,
    studentID: {
        type: Number,
        required: true
    }
});

const Course = mongoose.model('Course', courseSchema);


module.exports = Course;