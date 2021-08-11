const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/admin",{useNewUrlParser : true}, (error)=>{
    if(!error){
        console.log("Success Connected");
    }
    else{
        console.log("Error in connecting to database");
    }
})