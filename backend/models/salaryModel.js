const mongoose = require('mongoose')


const salarySchema = new mongoose.Schema({
    UID:{
        type:Number
    },
    salaries:[
        {
            month:{
                type:String,
            },
            salary:{
                type:Number,
            },
            holdername:{
                type:String,
            },
            accountNo:{
                type:Number,
            },
            ifsc:{
                type:String,
            },
            cutoff:{
                type:Number,
            },
            submiton:{
                type:String,
            }
        }
    ]
    
})

module.exports = mongoose.model('salary',salarySchema)