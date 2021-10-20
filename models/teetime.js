//link to mongoose
const mongoose = require('mongoose')

//define a schema for golfer name
var GolferName = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
})

//holes schema
var holes = new mongoose.Schema({
    name: {
        type:Number,
        required: true
    }
})

//cart schema
var cart = new mongoose.Schema({
    name: {
        type: Number,
        required: true
    }
})

//date schema
var date = new mongoose.Schema({
    name: {
        type: Date,
        required: true
    }
})

//greenFee schema
var greenFee = new mongoose.Schema({
    name: {
        type:Number,
        required: true
    }
})


//make this model public with the name of the golfer
module.exports = mongoose.model('Golfer Name', GolferName)

//make this model public
module.exports = mongoose.model('Holes', holes)

//make this model public
module.exports = mongoose.model('Cart', cart)

//make this model public
module.exports = mongoose.model('Date', date)

//make this model public
module.exports = mongoose.model('greenFee', greenFee)