var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));
//listen to a particular port (default 3000)
var port = 3000;
app.listen(port)

var addInts = function(num1,num2){
    var total = parseInt(num1) + parseInt(num2);
    return total;
}

app.get('/add', function(req,res){
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    var total = addInts(num1,num2);
    res.send('The total of '+num1+' and '+num2+' is '+total);
})