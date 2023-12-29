const express = require('express');
const StudentSchema = require('../models/schema');
const Course = require('../models/schema');
const app = express();

app.use(express.json());

// Register a new student
app.post('/register', async (req, res) => {
  try {
    // Check if a student with the provided details already exists
    const existingStudent = await Student.find({
      Firstname: req.body.firstName,
      Lastname: req.body.lastName,
      Othernames: req.body.otherNames,
      StudentID: req.body.studentID
    });

    if (existingStudent) {
      return res.status(400).json({ success: false, message: 'Student already exists' });
    }

    // Create a new student
    const newStudent = new StudentSchema(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json({ success: true, message: 'Student registered successfully', student: savedStudent });
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Handle validation errors
      return res.status(400).json({ success: false, errors: error.errors });
    } else {
      // Handle other errors
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
});



// Login route
app.post('/login', async (req, res) => { 
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

app.post('/courses', async (req, res) => {
  try {
  const course = new Course(req.body);
  const savedCourse = await course.save();
  res.status(201).json({ success: true, message: 'Student registered successfully', student: savedCourse });
} catch (error) {
    // Handle validation errors
    return res.status(400).json({ success: false, errors: error.errors });
 
}
})



module.exports = app;
