const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

//midle
app.use(cors());
app.use(express.json());


//route
app.use('/api', require('./routes/videoRoute'))

app.listen(process.env.PORT, () => {
    console.log(`connected to server ${process.env.PORT}`);
});


mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(!err){
        console.log('Database connected');
    }else{
        console.log(err);
    }
});