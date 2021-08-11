const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const  MarkModel = mongoose.model("Mark")

router.get("/list", (req, res)=> {
    MarkModel.find((err, docs)=> {
        if(!err)
        {
            res.send("Marks Controller")
        }
    })
});

module.exports = router;