const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    date:{
        type:String
    },
    attendance:[
        {
            UID:{
                type:Number,
            },
            fullname:{
                type:String,
            },
            time:{
                type:String,
            },
            position:{
                type:String,
            },
            image:{
                url:{
                    type:String
                },
                filename:{
                    type:String
                }
            },
            status:{
                type:String,
                default: "Pending"
            }
        }
    ]
})

module.exports = mongoose.model('Attendance',AttendanceSchema)