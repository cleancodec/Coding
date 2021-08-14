const express = require('express');
const mongoose = require('mongoose');
const Meals = require('./models/Meals');
const cors = require('cors')
const app  = express();

const MealsModel = require("./models/Meals")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://newuser:XTrDFPinesANPrc2@crud.dos9f.mongodb.net/meals?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

app.post('/insert', async (req, res) => {
    
    const mealName = req.body.mealName
    const days = req.body.days

    const meals = new MealsModel({mealsName : mealName, daysSinceIAte : days});
    try {
        await meals.save();
        res.send("inserted data");
    }catch(err)
    {
        console.log(err);
    }
});

app.get('/read', async (req, res) => {
    
    //MealsModel.find({ $where: {mealsName : " Apple"}})
    MealsModel.find({}, (err, result) => {
        if(err)
        {
            res.send(err);
        }

        res.send(result);
    });
});

app.put('/update', async (req, res) => {
    
    const newMealName = req.body.newMealName
    const id = req.body.id
    try {
       await MealsModel.findById(id,(err,updatedMeal) => {
           updatedMeal.mealsName = newMealName;
           updatedMeal.save();
           res.send("Update");
       })
    }catch(err)
    {
        console.log(err);
    }
});



app.listen(3001,()=>{
    console.log("Server running on  port 3001...");
});