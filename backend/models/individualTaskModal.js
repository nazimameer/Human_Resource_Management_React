const mongoose = require('mongoose');

const iTaskSchema = new mongoose.Schema({
    UID:{
        type:String,
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
            type: mongoose.Schema.Types.ObjectId
        }
    }],
})

module.exports = mongoose.model('itask',iTaskSchema);