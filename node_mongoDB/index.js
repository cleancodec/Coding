const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const ExpressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");

application.use(bodyparser.urlencoded({
    extended : true
}));    

application.get("/", (req, res)=>{
    res.send('<h1> Hellow World <h1>')
})

application.listen("3000", ()=> {
    console.log("Server started");
});