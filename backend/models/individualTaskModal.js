const mongoose = require('mongoose');

const iTaskSchema = new mongoose.Schema({
    UID:{
        type:String,
    },
    tasks:[{
        startdate:{
            type:String,
        },
        enddate:{
            type:String,
        },
        task:{
            type:String
        },
        assignedby:{
            type: mongoose.Schema.Types.ObjectId
        },
        status:{
            type:String,
            default:"Pending"
        }
    }],
})

module.exports = mongoose.model('itask',iTaskSchema);