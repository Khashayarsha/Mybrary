if (process.env.NODE_ENV !=='production') {

    require('dotenv').parse()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')  //tells the express app that views are to be found in views directory, which is current dir  (__dirname) with /views appended to it
app.set('layout', 'layouts/layout') //tells express app where to find the layouts 
app.use(expressLayouts)
app.use(express.static('public'))   //files such as stylesheets (css), javascript, or images

app.use('/', indexRouter)
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection()
db.on('error', error => {
    console.error(error)}) 
db.once('open', () => console.log('Connected to Mongoose'))

app.listen(process.env.PORT || 3000) //the server is gonna tell which port it's listening. But we'll default to 3000 if server doesn't tell us anything (during development we dont have real server)
//we need to setup some routes in our application
//for larger app, routes need to be defined according to MVC, in a routes folder.
//routes are 'controllers' in MVC
