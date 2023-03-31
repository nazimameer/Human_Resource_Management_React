const mongoose = require('mongoose');


const depTaskSchema = new mongoose.Schema({
    departmentId:{
        type:mongoose.Schema.Types.ObjectId
    },
    tasks:[{
        startdate:{
            type:Date,
        },
        enddate:{
            type:Date,
        },
        task:{
            type:String
        },
        assignedby:{
            type:mongoose.Schema.Types.ObjectId
        }
    }],
})

module.exports = mongoose.model('depTask',depTaskSchema)