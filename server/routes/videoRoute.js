const express = require('express');
const router = express.Router();
const Video = require('../model/video');


router.post('/video', (req,res)=> {
    const video = new Video({
        title:req.body.title,
        videoUrl:req.body.videoUrl,
        videoType:req.body.videoType
    })
    video.save()
    .then((data) => {
        res.json(data)
    })
    .catch((err)=>{
        res.status(400).json({err:"Data not found"});
    })
})

router.get('/allvideo', (req,res)=> {
    Video.find()
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.status(400).json({err:"Data not found"})
    })
})


module.exports = router;