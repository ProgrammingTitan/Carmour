const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    brand: 
    {
        type: String,
        required: true,
        unique:true
    },
    model:
    {
        type: String,
        required: true
    },
    year:
    {
        type: String,
        required: true
    },
    liveFeed:{
        type: String,
    },
    previousFeed:{
        type: [],
    },
    userID:{
        type: String,
        required: true
    },
    lat:{
        type: String,
    },
    lng:{
        type: String
    }
})

module.exports = User = mongoose.model("vehicle", vehicleSchema);