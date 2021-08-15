const mongoose = require('mongoose')

const MealsSchema = new mongoose.Schema({
    code : {
        type : String,
        required : true
    },
    mealsName : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    discount : {
        type : Number,
        required : true
    },
    days : {
        type : Number,
        required : true
    },
    
});

const Meals = mongoose.model("Meals", MealsSchema)
module.exports = Meals