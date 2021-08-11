const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", (req, res)=> {
    res.send("Marks Controller")
});

module.exports = router;