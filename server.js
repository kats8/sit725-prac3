var express = require('express')
var app = express()
let accounts = [{ id: 1, name: 'alex', deposit: 5 },
{ id: 2, name: 'sarah', deposit: 5 },
{ id: 3, name: 'jim', deposit: 15 }];

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

//finds account/s matching provided name
app.get('/find_account_name', function (req, res) {
    let name = req.query.name;
    let displayString = "";
    let found = false;
    console.log(accounts.length);
    for (i = 0; i < accounts.length; i++) {
        if (name.toUpperCase() == (accounts[i].name).toUpperCase()) {
            let matchID = accounts[i].id;
            let matchName = accounts[i].name;
            let matchDep = accounts[i].deposit;
            displayString = displayString + "<p>Matching account found:</p><p>Account ID: " + matchID + "<br>Name: " + matchName + "<br>Deposit: " + matchDep + "</p>";
            found = true;
        }
    }
    if (found == true) {
        res.send(displayString);
    }
    else {
        res.send("No matching account found. ");
    }
})

//returns accounts matching provided ID
app.get('/find_account_ID', function (req, res) {
    let id = req.query.id;
    let found = false;
    let displayString = "";
    for (i = 0; i < accounts.length; i++) {
        if (id == accounts[i].id) {
            let matchID = accounts[i].id;
            let matchName = accounts[i].name;
            let matchDep = accounts[i].deposit;
            displayString = displayString + "<p>Matching account found:</p><p>Account ID: " + matchID + "<br>Name: " + matchName + "<br>Deposit: " + matchDep + "</p>";
            found = true;
        }
    }
    if (found == true) {
        res.send(displayString);
    }
    else {
        res.send("No matching account found. ");
    }
})

//finds accounts matching provided deposit amount
app.get('/find_account_deposit', function (req, res) {
    let deposit = req.query.deposit;
    let displayString = "";
    let found = false;
    for (i = 0; i < accounts.length; i++) {
        if (parseInt(deposit) == parseInt(accounts[i].deposit)) {
            let matchID = accounts[i].id;
            let matchName = accounts[i].name;
            let matchDep = accounts[i].deposit;
            displayString = displayString + "<p>Matching account found:</p><p>Account ID: " + matchID + "<br>Name: " + matchName + "<br>Deposit: " + matchDep + "</p>";
            found = true;
        }
    }
    if (found == true) {
        res.send(displayString);
    }
    else {
        res.send("No matching account found. ");
    }
})

//retrieves all accounts
app.get('/find_accounts_all', function (req, res) {
    let displayString = "";
    if (accounts.length > 0) {
        for (i = 0; i < accounts.length; i++) {
            let matchID = accounts[i].id;
            let matchName = accounts[i].name;
            let matchDep = accounts[i].deposit;
            displayString = displayString + "<p>Account ID: " + matchID + "<br>Name: " + matchName + "<br>Deposit: " + matchDep + "</p>";
        }
        res.send(displayString);

    }
    else {
        res.send("Account list empty.");
    }

})