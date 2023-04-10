const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema(
    {
            senderId: {
             type: String 
            },
            tittle:{
                type:String,
            },
            content:{
                type:String,
            },
            time:{
                type: String,
            }
    },
    {
        timestamps:true, 
    }
)


module.exports = mongoose.model('announcement',announcementSchema)



