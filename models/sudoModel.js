const { text } = require('express');
const mongoose = require('mongoose')




const SudoSchema = mongoose.Schema(
    {
        User:{
            type:Array,
            required:true
        },
    },
    {
        timestamps: true
    }
)



const Sudo = mongoose.model('sudo',SudoSchema);
module.exports = Sudo;