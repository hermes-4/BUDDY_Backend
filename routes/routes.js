const express = require('express');
const mongoose = require('mongoose');
const StudentSchema = require('../models/schema');
const router = express.Router();





// Routes
// First route for registering a new student
router.post('/register', async (req, res) => {

        const student = new StudentSchema({
            Firstname:req.body.firstName, 
            Lastname:req.body.lastName, 
            Othernames:req.body.otherNames, 
            StudentID:req.body.studentID, 
            Password:req.body.password, 
            Courses:req.body.courses
        });
        res.send('Hiii');

    try {

        await student.save();
        res.status(200).json({ message: 'Student registered succesfully' });
    }
    catch(error) {
        res.status(400).json({ message: error.message });
    }
});


//Second route. For logining into the system
router.post('/login', async (req, res) => {
        const { studentID, password } = req.body;
        const student = await StudentSchema.findOne({ studentID });

        res.send('Hello');


    try {

        if (student && (await bcrypt.compare(password, student.password))) {
            return res.status(200).json({ message: 'Succesfully signed in' });
        }

    }
    catch(error) {
        res.status(400).json({ message: error.message });

    }
})



// Creating an authenticate token for the courses endpoint
// const authenticateToken = (req, res, next) => {
    // const token = rew.headers['authorization'];

    // if (!token) {
        // return res.status(401).json({ error: 'Unauthorized: Token absent' });
    // }

    // jwt.verify(token, 'secret-key', (err, user) => {
        // if (err) {
            // return res.status(403).json({error: 'Forbidden: Invalid token'});
        // }

        // req.user = user;
        // next();
    // });
// }



//Specifying courses for the semester
router.post('/courses', async (req, res) => {
    const { courses } = req.body;

   // // You can access the authenticated student's username using req.user.username
    const student = await StudentSchema.findOne({ username: req.body.studentID });

    res.send('Heyy');



    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    student.courses = courses;
    await student.save();
    
    res.status(200).json({ message:'Courses sucessfully added for the semseter'});

});


module.exports = router;