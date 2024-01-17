const express = require('express');
const route6 = express.Router();
const PastQuestionsSchema = require('../models/pastQuestionsSchema');



route6.post('/create', async (req, res) => {
    try {
        
        const newPasco = await PastQuestionsSchema.create(req.body);
        
        const savedPasco = newPasco.save();
        res.status(200).json(savedPasco);  


    }catch(error) {
        console.log(error.message);
        res.status(500).json({error: error.message});
    }
});


module.exports = route6;

