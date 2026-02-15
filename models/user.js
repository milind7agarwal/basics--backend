const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required:true,
        trim:true,
        lowercase: true,
        unique: true,
        minlength: [3, 'Usernme must not exceed more than 3 chracter'] 
    },
    password : {
        type: String,
        required:true,
        trim:true,
        unique: true,
        minlength: [5, 'password must not exceed more than 5 chracter'] 
    } 
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel

//to create requirments of dotabase
