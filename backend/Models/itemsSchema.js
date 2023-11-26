const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true   
    },
    email : {
        type : String,
        required : true
    },
    aadhar : {
        type : Number,
        required : true
    },
    pan : {
        type : String,
        required : true
    },
    company: {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    doj : {
        type : String,
        required : true
    },
    doe : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    reasonToEndorse : {
        type : String,
        required : true
    },
    proof : {
        type : String
    },
    witnesses : {
        type : String,
        required : true
    },

});

module.exports = mongoose.model("itemsEdorse", itemsSchema);