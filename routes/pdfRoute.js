const express =require('express');
const path = require('path');
const pdfRoute = express.Router();

pdfRoute.use((req,res,next)=>{
    next();
});

pdfRoute.get('/pdf1', (req, res) => {
    res.download("../pdf/timetable.pdf");
});



module.exports = pdfRoute;

