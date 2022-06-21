const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Todo = new Schema({
    task:{
        type:String,
        require:true,
        trim:true,
        maxlenght:30,
    },
},
    {
        timestamps:true
    });

module.exports = mongoose.model("Todo",Todo)