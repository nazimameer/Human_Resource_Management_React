const mongoose = require('mongoose');

const iTaskSchema = new mongoose.Schema({
    UID:{
        type:String,
    },
    startTime:{
        type:Date
    },
    duration:{
        type:Date,
    },
    tasks:[
        {
            type:String,
            status:{
                type:String,
                default:"Pending"
            }
        }
    ],

    assignedby:{
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('itask',iTaskSchema);