const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender:{ type:mongoose.Schema.Types.ObjectId, ref:"employee"},
    content:{ type: String, trim: true},
    chat:{
            type:mongoose.Schema.Types.ObjectId, res:"Chat"
    }
},
{
    timestamps: true,
})


module.exports = mongoose.model('Message', messageSchema)