const express = require('express');
const route4 = express.Router();
const UpdateR = require('../models/upR');
const UpdateS = require('../models/upS');




route4.use((req,res,next)=>{
    next();
})


//Update Sender
route4.post ('/updateS', async(req,res) =>
{
   try {
  const updatesend = await UpdateS.create(req.body)
  res.status(200).json(updatesend);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})

route4.get('/updateS',async(req,res)=>{
    try{
const updatesend = await UpdateS.find({});
res.status(200).json(updatesend);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})

route4.delete('/updateS/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const student = await UpdateS.findByIdAndDelete(id);
        if(!student){
            return res.status(404).json({message:`Student${id}`})
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

route4.put('/updateS/:id',
async(req,res)=> {
    try {
        const {id} =req.params;
        const updatte = await UpdateS.findByIdAndUpdate(id,req.body) 
        if(!updatte) {
            return res.status(404).json({message:`Cannot find Name`})
        }
        const updattee =  await UpdateS.findById(id);
        res.status(200).json(updattee)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
)
route4.put('/updateSs',
async(req,res)=> {
    try {
        const updatte = await UpdateS.updateMany(req.body) 
        if(!updatte) {
            return res.status(404).json({message:`Cannot find Name`})
        }
        const updattee =  await UpdateS.findById(id);
        res.status(200).json(updattee)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
)






//Update Reciever

route4.post ('/updateR', async(req,res) =>
{
   try {
  const updaterecieve = await UpdateR.create(req.body)
  res.status(200).json(updaterecieve);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})

route4.get('/updateR',async(req,res)=>{
    try{
const updaterecieve = await UpdateR.find({});
res.status(200).json(updaterecieve);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})

route4.delete('/updateR/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await UpdateR.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:`cannot find product${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

route4.put('/updateR/:SName',
async(req,res)=> {
    try {
        const {SName} =req.params;
        const updatte = await UpdateR.findByIdAndUpdate(SName,req.body) 
        if(!updatte) {
            return res.status(404).json({message:`Cannot find Name :${SName}`})
        }
        const updattee =  await UpdateR.findById(SName);
        res.status(200).json(updattee)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
)


module.exports = route4;