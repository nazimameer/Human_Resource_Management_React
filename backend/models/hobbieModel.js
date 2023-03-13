const mongoose = require('mongoose');

const hobbieSchema = new mongoose.Schema({
    UID:{
        type:Number
    },
    hobbies:[
        {
            type:String,
        }
    ]
})

module.exports = mongoose.model('hobbie',hobbieSchema);
