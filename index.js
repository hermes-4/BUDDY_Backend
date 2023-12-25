const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');


// mongoose connection
mongoose.connect('mongodb+srv://ebenezeroforia08:mongodbatlas@cluster0.kid8vhm.mongodb.net/') 
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})
database.once('connecred', () => {
    console.log('DATABASE CONNECTED');
})



const app = express();
app.use(express.json());
app.use('/api', routes);


const PORT = process.env.PORT || 3020;


// Listneing Port
app.listen(PORT, () => {
    console.log(`Hey Student, I'm eavesdropping on port ${PORT}`);
})


