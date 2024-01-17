const express = require('express');
const route6 = express.Router();
const PastQuestionsSchema = require('../models/pastQuestionsSchema');



route6.post('/create', async (req, res) => {
    try {
        
        const newPasco = await PastQuestionsSchema.create(req.body);
        res.status(200).json(newPasco);  


    }catch(error) {
        console.log(error.message);
    }
});

//get route info for a particular course

route6.get('/get/:course', async (req, res) => {
    let course = req.params.course.toLowerCase();
    try {
        const courseInfo = await PastQuestionsSchema.findOne({course: course});
        res.status(200).json(courseInfo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})


module.exports = route6;

