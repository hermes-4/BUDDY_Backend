const express = require('express');
const StudentSchema = require('../models/studentSchema');
const Course = require('../models/studentSchema');
const route0 = express();




route0.use((req,res,next)=>{
  next();
});

// Register a new student
route0.post('/register', async (req, res) => {
  
    // Check if a student with the provided details already exists
    const existingStudent = await StudentSchema.find({
      studentID: req.body.studentID
    });

    if (existingStudent.length != 0) {
      return res.status(400).json({ success: false, message: 'Student already exists' });
    }
    else {
    // Create a new student
    const newStudent = await StudentSchema.create(req.body);
    res.status(200).json(newStudent);

  }

});



// Login route
route0.post('/login', async (req, res) => { 
  const newStudentID = req.body.studentID;
  const newPassword = req.body.password;

  if (!newStudentID || !newPassword) {
    return res.status(400).json({ success: false, message: 'StudentID and password are required' });
  }

  try {
    // Find the student by studentID and password
    const student = await StudentSchema.find({ 
      studentID: newStudentID,
      password: newPassword
    });


    if (!student) {
      return res.status(401).json({ success: false, message: 'Sign In unsuccessful' });
    }

    return res.status(200).json({ success: true, message: 'Sign In Successful' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

  

  // Specify courses for the semester

route0.post('/courses', async (req, res) => {
  try {
  const course = new Course(req.body);
  const savedCourse = await course.save();
  res.status(201).json({ success: true, message: 'Student registered successfully', student: savedCourse });
} catch (error) {
    // Handle validation errors
    return res.status(400).json({ success: false, errors: error.errors });
 
}
})



module.exports = route0;
