const express = require('express');
const app = express();
const route1 = express.Router();
const Student = require('../models/studentSchema')

//This admin route is for testing purposes

route1.use((req,res,next)=>{
    next();
});


// Route for obtaining details of all students
route1.get('/allstudents',async(req,res)=>{
    try {
        const student  = await Student.find({});
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
    }
})


module.exports = route1;