const mongoose = require('mongoose')

const MealsSchema = new mongoose.Schema({
    mealsName : {
        type : String,
        required : true
    },
    daysSinceIAte : {
        type : Number,
        required : true
    },
    
});

const Meals = mongoose.model("Meals", MealsSchema)
module.exports = Meals