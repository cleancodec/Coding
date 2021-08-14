const express = require('express');
const mongoose = require('mongoose');
const Meals = require('./models/Meals');
const app  = express();

const MealsModel = require("./models/Meals")

app.use(express.json())

mongoose.connect("mongodb+srv://newuser:XTrDFPinesANPrc2@crud.dos9f.mongodb.net/meals?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

app.get('/', async (req, res) => {
    
    const meals = new MealsModel({mealsName : "Apple", daysSinceIAte : 3});
    try {
        await meals.save();
    }catch(err)
    {
        console.log(err);
    }
})

app.listen(3001,()=>{
    console.log("Server running on  port 3001...");
});