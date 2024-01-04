const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const admin = require('./admin/adminRoutes')
const sudo = require('./admin/sudoRoutes')
const update = require('./routes/updateRoutes');
const pdfRoute = require('./routes/pdfRoute');  



// mongoose connection
mongoose.connect('mongodb+srv://tattahabelk:Abel1919@cluster0.bkxk0nq.mongodb.net/')
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((error)=>{
    console.log(error.message);
})
// mongodb+srv://ebenezeroforia08:mongodbatlas@cluster0.kid8vhm.mongodb.net/ 





const app = express();

app.use(express.json());
app.use('/api', routes);
app.use('/admin',admin);
app.use('/update',update);
app.use('/sudo',sudo);
app.use('/pdf',pdfRoute);

const PORT = process.env.PORT || 3020;


// Listneing Port
app.listen(PORT, () => {
    console.log(`Hey Student, I'm eavesdropping on port ${PORT}`);
})


