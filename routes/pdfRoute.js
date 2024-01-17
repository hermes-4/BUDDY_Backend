const express = require('express');
const path = require('path');
const pdfRoute = express.Router();
const filePath1 = path.join(__dirname, '../pdf', 'timetable.pdf');
const filePath2 = path.join(__dirname, '../pdf', 'mathtimetable.pdf');
const filePath3 = path.join(__dirname, '../pdf', 'statisticstimetable.pdf');
const filePath4 = path.join(__dirname, '../pdf', 'academiccalendar.pdf');
const filePath5 = path.join(__dirname, '../pdf', 'fees.pdf');
const filePath6 = path.join(__dirname, '../pdf', 'examtimetable.pdf');
const filePath7 = path.join(__dirname, '../pastQuestions', 'dcit101.pdf');
const filePath8 = path.join(__dirname, '../pastQuestions', 'dcit201.pdf');
const filePath9 = path.join(__dirname, '../pastQuestions', 'math121.pdf');



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

pdfRoute.get('/dcit101', (req, res) => {
    res.download(filePath7);
});

pdfRoute.get('/dcit201', (req,res) => {
    res.download(filePath8);
});

pdfRoute.get('/math121', (req,res) => {
    res.download(filePath9);
});


module.exports = pdfRoute;

