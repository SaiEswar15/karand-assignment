const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    username : {
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
    password : {
        type : String,
        required : true
    },
    confirm_password : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("dataEdorse", dataSchema);