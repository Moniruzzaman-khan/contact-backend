const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const productRoute = require('./src/routes/api')
const app = express()


//middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(cors({}))
//route middleware
app.use('/api/v1',productRoute)

//db and server
mongoose.connect("mongodb+srv://monir:1234@cluster0.bzyuo9d.mongodb.net/contact?retryWrites=true&w=majority");

app.listen(5000,function () {
    console.log("App Run @5000")
})