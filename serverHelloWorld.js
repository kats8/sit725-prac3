var express = require('express')
var app = express()

//respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req,res){
    res.send('hello world')
})

//list(en?) to a particular port
app.listen(3000)