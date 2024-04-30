const mongoose = require("mongoose");

const userschema = mongoose.userschema({
name: {
    type: String,
    required: ture
},
age: {
    type: Number,
    required: true 
},
emial: {
    type: String,
    required: true 
}
})

module.exports = mongoose.model("user", userschema);