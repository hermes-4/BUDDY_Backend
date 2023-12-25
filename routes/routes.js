const express = require('express');
const bcrypt = require('bcrypt');
const StudentSchema = require('../models/schema');
const app = express();


app.use(express.json())


// Routes
// First route for registering a new student
app.post('/register', async (req, res) => {

        const student = await StudentSchema.find({
            Firstname:req.body.firstName, 
            Lastname:req.body.lastName, 
            Othernames:req.body.otherNames, 
            StudentID:req.body.studentID, 
            Password:req.body.password, 
            Courses:req.body.courses
        });
        
        

    if(student.length==0) {
        const success = await StudentSchema.create(req.body);
        res.status(200).json(success);
    }
    else {
        res.status(400).json({ message: error.message });
    }
});


//Second route. For logining into the system
app.post('/login', async (req, res) => {
        const { studentID, password } = req.body;

        // Validate if studentID and password has been entered

        // Inside the try and check block, validate with the database.
        
        // If user not found or password doesn't match, return an error        
        // in the catch block, return an error 
        if (!studentID && !password) {
            return res.status(401).json({ message:error.message });
        }


    try {
        const student = await StudentSchema.findOne({ studentID, password });
        if (!student || !student.password == !password) {
            return res.status(401).json({ message: 'Sign In unsuccesful' });
        }


        return res.status(200).json({ message:'SignIn Successful' });
    }
    catch(error) {
        res.status(400).json({ message: error.message });

    }
})



//Specifying courses for the semester
app.post('/courses', async (req, res) => {
    const { courses } = req.body;

   // // You can access the authenticated student's username using req.user.username
    // Destructuring studentID and saved into student    
    const student = await StudentSchema.findOne({ username: req.body.studentID });


    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    student.courses = courses;
    await student.save();
    
    res.status(200).json({ message:'Courses sucessfully added for the semseter'});

});


module.exports = app;