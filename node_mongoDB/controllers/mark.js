const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const  MarkModel = mongoose.model("students")

router.get("/list", (req, res)=> {

    //getting data
    MarkModel.find((err, docs)=> {
        if(!err)
        {
            console.log(docs);
            res.render("list", { data : docs });
        }
        else
        {
            res.send("Error occures on routing");    
        }
    }).lean()
});

module.exports = router;