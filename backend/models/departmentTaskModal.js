const mongoose = require('mongoose');


const depTaskSchema = new mongoose.Schema({
    departmentId:{
        type:mongoose.Schema.Types.ObjectId
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
            type:mongoose.Schema.Types.ObjectId
        },
        status:{
            type:String,
            default:"Pending"
        }
    }],
})

module.exports = mongoose.model('depTask',depTaskSchema)