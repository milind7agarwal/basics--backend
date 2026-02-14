// let catMe = require('cat-me')
// console.log(catMe())

const express = require('express');
const app = express()
const dbConnection = require('./config/db')
const userModel = require('./models/user.js')

app.use(express.json())                            //to show data from form into serve - built in middleware
app.use(express.urlencoded({ extended: true}))      //to show data from form into serve - built in middleware
app.use(express.static("public"))                   // to link css file 

app.set("view engine" , 'ejs') // to use ejs 

//middleware
middleware = ((req,res,next) => {
    console.log('time:' , Date.now())
    return next()
})


app.get("/",middleware,(req,res) => {
    res.render('index')
})

app.get("/register" ,(req,res) => {
    res.render('register')
})


// CRUD OPERATION

// 1. C = Create

app.post("/register" , async(req,res) => {
    console.log(req.body)
    const { username , password} = req.body
    await userModel.create({
        username : username,
        password : password
    })
    res.send("user registered")
})

app.post("/login", (req,res) => {
    console.log(req.body)
    res.send('data received')
})
//post method => to not show password in url


// 2. READ
app.get('/get-user' , (req,res) => {
    userModel.find({    //findOne  - used to find a single user
        username:'alu'
    }).then((user) => {
        res.send(user)
    })
})

// 3. Update
app.get('/update-user', async (req,res) => {        //whenever we do smthg with database always use async and await that some async shit 
    await userModel.findOneAndUpdate({
        username: 'alu'
    }, {
        password: 'bhalu'
    })
    res.send("user updated")
})

//Delete

app.get("/delete-user" , async(req,res) => {
    await userModel.findOneAndDelete({
        username: 'alu'
    })
    res.send('user deleted')
})

app.listen(8080, () => {
    console.log("listening to port 8080")
})