const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    videoUrl:{
        type:String,
        required:true
    },
    videoType:{
        type:String,
        required:true
    }
});


module.exports = mongoose.model('Video',videoSchema);