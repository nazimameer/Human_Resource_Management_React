const mongoose = require('mongoose')


const skillSchema = new mongoose.Schema({
    UID:{
        type:Number
    },
    skills:[
        {
            type:String,
        }
    ]
})

module.exports = mongoose.model('skill',skillSchema)