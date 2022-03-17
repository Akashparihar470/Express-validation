const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {type : String, required: true},
    lastname: {type : String, required: true},
    email: { type: String, required: true, unique: true },
    pincode: {type : Number, required: true},
    age: {type : Number, required: true},
    gender: {type : String, required: true,enum:["Male","Female","Others"]}
},{
    versionKey: false,
    timestamps:true,
})

module.exports = mongoose.model("user",userSchema)