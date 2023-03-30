const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:'employee'    
        }
        ],
        latestMessage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
        },
        groupAdmin: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"hr"
        }
    },
    {
        timestamps:true, 
    }
)


module.exports = mongoose.model('Chat',chatSchema)