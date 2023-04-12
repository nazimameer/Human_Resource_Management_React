const mongoose = require('mongoose');

const overTimePaymentSchema = new mongoose.Schema({
    date:{
        type:String,
    },
    fullname:{
        type:String,
    },
    UID:{
        type:String,
    },
    position:{
        type:String,
    },
    duration:{
        type:String,
    },
    payment:{
        type:Number,
    },
    initiatedBy:{
        type:mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('overtimepayment', overTimePaymentSchema)