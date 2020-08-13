
var express = require('express');
var moment = require('moment');

var app = express();

var log=function(message){
    var time=moment().format();
    console.log('[Server]@'+time+' '+message);
}

//listen to a particular port (choosing 4000 for calculator service)
let port = 4000;
app.listen(port)

//Coding for calculator
let addInts = function (num1, num2) {
    let total = parseInt(num1) + parseInt(num2);
    return total;
}

//End point for addition
app.get('/add', function (req, res) {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    var total = addInts(num1, num2);
    res.send(' '+total+' ');
})
