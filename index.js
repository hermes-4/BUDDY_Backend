const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const admin = require('./admin/adminRoutes')
const sudo = require('./admin/sudoRoutes')
const update = require('./routes/updateRoutes');
// mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2')
// mongodb+srv://ebenezeroforia08:mongodbatlas@cluster0.kid8vhm.mongodb.net/ 
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
app.use('/admin',admin);
app.use('/update',update);
app.use('/sudo',sudo);

const PORT = process.env.PORT || 3020;


// Listneing Port
app.listen(PORT, () => {
    console.log(`Hey Student, I'm eavesdropping on port ${PORT}`);
})


