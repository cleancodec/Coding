const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const  MarkModel = mongoose.model("students")

router.get("/add", (req, res)=> {
    res.render("add-mark")
})

router.post("/add", (req, res)=> {
    //res.render("add-mark");
    //console.log(req.body);
    var mark = new MarkModel();
    mark.id = Math.ceil(Math.random() * 10000) + "";
    mark.name = req.body.Sname;
    mark.mark1 = req.body.m1;
    mark.mark2 = req.body.m2;
    mark.mark3 = req.body.m3;
    mark.mark4 = req.body.m4;
    mark.mark5 = req.body.m5;
    mark.mark6 = req.body.m6;
    mark.save((err, doc)=> {
        if(!err)
        {
            res.redirect("/mark/list");
        }
        else
        {
            res.sent("Error occured");
        }
    })
})

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