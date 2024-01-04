const express =require('express');
const path = require('path');
const pdfRoute = express.Router();
const filePath = path.join(__dirname, 'pdf', 'timetable.pdf');

pdfRoute.use((req,res,next)=>{
    next();
});

pdfRoute.get('/pdf1', (req, res) => {
    res.download(filePath);
});


module.exports = pdfRoute;

