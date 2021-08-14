const express = require('express')
const mongoose = require('mongoose')
const app  = express()

app.use(express.json())

mongoose.connect("mongodb+srv://newuser:XTrDFPinesANPrc2@crud.dos9f.mongodb.net/meals?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

app.listen(3001,()=>{
    console.log("Server running on  port 3001...");
});