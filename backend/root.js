const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://saieswarkumar:8688855996s@cluster0.x0jmtud.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to DB.......")
})

const express = require("express");

const app = require("./app");

app.listen(8081,()=>{
    console.log("running on server 8081.......")
})