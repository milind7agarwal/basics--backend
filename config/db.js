const mongoose = require('mongoose')

let connection = mongoose.connect('mongodb://127.0.0.1:27017/numpy').then(() =>{
    console.log("connected to database")
})

module.exports = connection
// to connect with data base