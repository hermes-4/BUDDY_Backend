const { text } = require('express');
const mongoose = require('mongoose')




const updateS = mongoose.Schema(
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



const UpdateS = mongoose.model('updates',updateS);
module.exports =UpdateS;