var express = require('express')
var app = express()

//creating accounts to be used by account retrieval function
let accounts = [{ id: 1, name: 'alex', deposit: 5 },
{ id: 2, name: 'sarah', deposit: 5 },
{ id: 3, name: 'jim', deposit: 15 }];

app.use(express.static(__dirname + '/public'));
//listen to a particular port (default 3000)
var port = 3000;
app.listen(port)

//--------coding for calculator/adder------------------
var addInts = function (num1, num2) {
    var total = parseInt(num1) + parseInt(num2);
    return total;
}

//End points for array retrieval
app.get('/add', function (req, res) {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    var total = addInts(num1, num2);
    res.send('The total of ' + num1 + ' and ' + num2 + ' is ' + total);
})

//--------coding for accounts retrieval--------------------------
//finds account/s matching provided name
app.get('/search_account_name', function (req, res) {
    let name = req.query.name;
    let nameMatches = [];
    for (i = 0; i < accounts.length; i++) {
        if (name.toUpperCase() == (accounts[i].name).toUpperCase()) {
            nameMatches.push(accounts[i]);
        }
    }
    res.json(nameMatches);
})

//returns accounts matching provided ID
app.get('/search_account_ID', function (req, res) {
    let id = req.query.id;
    let idMatches = [];
    for (i = 0; i < accounts.length; i++) {
        if (id == accounts[i].id) {
            idMatches.push(accounts[i]);
        }
    }
    res.json(idMatches);
})

//retrieves accounts matching provided deposit amount
app.get('/search_account_deposit', function (req, res) {
    let deposit = req.query.deposit;
    let depMatches = [];
    for (i = 0; i < accounts.length; i++) {
        if (parseInt(deposit) == parseInt(accounts[i].deposit)) {
            depMatches.push(accounts[i]);
        }
    }
    res.json(depMatches);
})

//retrieves all accounts
app.get('/list_all_accounts', function (req, res) {

    res.json(accounts);

})