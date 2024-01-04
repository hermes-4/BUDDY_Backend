const express =require('express');
const path = require('path');
const pdfRoute = express.Router();
const filePath1 = path.join(__dirname, '../pdf', 'timetable.pdf');
const filePath2 = path.join(__dirname, '../pdf', 'mathtimetable.pdf');
const filePath3 = path.join(__dirname, '../pdf', 'statisticstimetable.pdf');
const filePath4 = path.join(__dirname, '../pdf', 'academiccalendar.pdf');
const filePath5 = path.join(__dirname, '../pdf', 'fees.pdf');
const filePath6 = path.join(__dirname, '../pdf', 'examtimetable.pdf');



pdfRoute.use((req,res,next)=>{
    next();
});

pdfRoute.get('/cstimetable', (req, res) => {
    res.download(filePath1);
});

pdfRoute.get('/mathtimetable', (req, res) => {
    res.download(filePath2);
});

pdfRoute.get('/statisticstimetable', (req, res) => {
    res.download(filePath3);
});

pdfRoute.get('/academiccalendar', (req, res) => {
    res.download(filePath4);
});

pdfRoute.get('/fees', (req, res) => {
    res.download(filePath5);
});

pdfRoute.get('/examtimetable', (req, res) => {
    res.download(filePath6);
});



module.exports = pdfRoute;

