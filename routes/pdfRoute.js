const express =require('express');
const express = require('express');
const path = require('path');
const pdf = require('../pdf/timetable.pdf')
const pdfRoute = express.Router();


pdfRoute.get('/pdf1', (req, res) => {   
    res.sendFile(pdf);
});



module.exports = pdfRoute;

