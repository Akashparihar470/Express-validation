const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb+srv://practice:moon@cluster0.gkuge.mongodb.net/practice?retryWrites=true&w=majority")
}