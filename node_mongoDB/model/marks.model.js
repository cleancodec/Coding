const mongoose = require("mongoose");

var MarkSchema = new mongoose.Schema({
    id :{
        type : String ,
        required : "Required"
    },
    name :{
        type : String ,
        required : "Required"
    },
    mark1 :{
        type : String ,
        required : "Required"
    },
    mark2 :{
        type : String ,
        required : "Required"
    },
    mark3 :{
        type : String ,
        required : "Required"
    },
    mark4 :{
        type : String ,
        required : "Required"
    },
    mark5 :{
        type : String ,
        required : "Required"
    },
    mark6 :{
        type : String ,
        required : "Required"
    },
})

mongoose.model("students" , MarkSchema);