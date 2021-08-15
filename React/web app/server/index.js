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
    
    const code = req.body.code
    const mealName = req.body.mealName
    const price = req.body.price
    const discount = req.body.discount
    const days = req.body.days

    const meals = new MealsModel({code : code, mealsName : mealName, price : price, discount : discount, days : days});
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
    const newPrice = req.body.newPrice
    const newDiscount = req.body.newDiscount
    const newDay = req.body.newDay
    const id = req.body.id
    try {
       await MealsModel.findById(id,(err,updatedMeal) => {
           updatedMeal.mealsName = newMealName;
           updatedMeal.price = newPrice;
           updatedMeal.discount = newDiscount;
           updatedMeal.days = newDay;
           updatedMeal.save();
           res.send("Update");
       })
       
    }catch(err)
    {
        console.log(err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id =req.params.id;

    await MealsModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

app.listen(3001,()=>{
    console.log("Server running on  port 3001...");
});