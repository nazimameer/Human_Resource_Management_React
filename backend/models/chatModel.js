const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
    {
        chatId: { type: String },
        users:[
            {
            type:mongoose.Schema.Types.ObjectId,
        }
        ],
        message:[{ 
            senderId:{
                type:mongoose.Schema.Types.ObjectId
            },
            content:{
                type:String,
            },
            time:{
                type: String,
            }
        }],
        latestMessage:{
            type:String
        },
    },
    {
        timestamps:true, 
    }
)


module.exports = mongoose.model('Chat',chatSchema)