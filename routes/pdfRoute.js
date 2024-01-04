const express =require('express');
const path = require('path');
const pdfRoute = express.Router();

pdfRoute.use((req,res,next)=>{
    next();
});

pdfRoute.get('/pdf', (req, res) => {
    const filePath = path.join("pdf", '/timetable.pdf');
    res.sendFile(filePath);
});



module.exports = pdfRoute;

