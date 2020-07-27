var express = require('express')
var app = express()
let accounts = [{ id: 1, name: 'alex', deposit: 5 },
{ id: 2, name: 'sarah', deposit: 5 },
{ id: 3, name: 'jim', deposit: 15 }]

app.use(express.static(__dirname + '/public'));
//listen to a particular port (default 3000)
var port = 3000;
app.listen(port)

var addInts = function (num1, num2) {
    var total = parseInt(num1) + parseInt(num2);
    return total;
}

app.get('/add', function (req, res) {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    var total = addInts(num1, num2);
    res.send('The total of ' + num1 + ' and ' + num2 + ' is ' + total);
})

app.get('/find_account', function (req, res) {
    let name = req.query.name;
    for (i = 0; i < accounts.length; i++) {
        if (name == accounts[i].name) {
            let matchID = accounts[i].id;
            let matchName = accounts[i].name;
            let matchDep = accounts[i].deposit;
            res.send("Matching account found\n ID: ${matchID}\nName: ${matchName}\n Deposit: ${matchDep}")
        } else {
            res.send("No matching account found.");
        }
    }
})