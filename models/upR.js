const { text } = require('express');
const mongoose = require('mongoose')




const updateR = mongoose.Schema(
    {

        Update:{
            type:Array,
            required:true
        },
        SID:{
            type:Number,
            required:true,
            default:0
        }, 

    },
    {
        timestamps: true
    }
   
)



const UpdateR = mongoose.model('updater',updateR);
module.exports =UpdateR;