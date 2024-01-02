const express  = require('express');
const route2 = express.Router();
const Sudo = require('../models/sudoModel')

route2.use((req,res,next)=>{
    next();
});

//Sudo Users
route2.post ('/sudo', async(req,res) =>
{
   try {
  const sudo = await Sudo.create(req.body)
  res.status(200).json(sudo);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})
route2.get('/sudo',async(req,res)=>{
    try{
const sudo = await Sudo.find({});
res.status(200).json(sudo);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})


module.exports = route2;
