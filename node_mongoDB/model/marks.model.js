const mongoose = require("mongoose");

var MarkSchema = new mongoose.Schema({
    name :{
        type : String ,
        required : "Required"
    },
    mark1 :{
        type : Number ,
        required : "Required"
    },
    mark2 :{
        type : Number ,
        required : "Required"
    },
    mark3 :{
        type : Number ,
        required : "Required"
    },
    mark4 :{
        type : Number ,
        required : "Required"
    },
    mark5 :{
        type : Number ,
        required : "Required"
    },
    mark6 :{
        type : Number ,
        required : "Required"
    },
})

mongoose.model("students" , MarkSchema);