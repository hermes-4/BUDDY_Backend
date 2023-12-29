const express = require('express');
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    otherNames: {
        type: String,
        required: false
    },
    studentID: {
        type: String,
        max:8,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
})


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;



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