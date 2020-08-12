
var express = require('express');
var moment = require('moment');

var app = express();

var log=function(message){
    var time=moment().format();
    console.log('[Server]@'+time+' '+message);
}

app.use(express.static(__dirname + '/public'));
//listen to a particular port (default 3000)
let port = 3000;
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

//coding for accounts querying
let accounts = [{ id: 1, name: 'alex', deposit: 5 },
{ id: 2, name: 'sarah', deposit: 5 },
{ id: 3, name: 'jim', deposit: 15 }];


//finds account/s matching provided name - ARRAY
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

//returns accounts matching provided ID - ARRAY
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

//retrieves accounts matching provided deposit amount - ARRAY
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

//retrieves all accounts - ARRAY
app.get('/list_all_accounts', function (req, res) {
    res.json(accounts);
})


//************task using classes and linked list (using nodes)******************************

//class for making nodes for use in linked list
class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    value() {
        return this.value;
    }
    next() {
        return this.next;
    }
    prev() {
        return this.prev;
    }

}

class Account {
    constructor(id, name, deposit) {
        this.id = id;
        this.name = name;
        this.deposit = deposit;
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDeposit() {
        return this.deposit;
    }

}
//class for making LinkedList using Nodes - special class where node values are always accounts
class LinkedListAccount {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    //adds an account to the front of the linked list
    addFront(id, name, deposit) {
        let addAccount = new Account(id, name, deposit);
        let newNode = new Node(addAccount, this.head, null)
        if (this.head != null) { //if list not empty
            this.head.prev = newNode; //current head now links (via previous) to newNode (pending new head)
        } else {
            this.tail = newNode; //if list was empty, tail will also be the new node
        }
        this.head = newNode; //set newNode as the new head of linked list
    }

    //adds an account to the back end of the Linked list
    addBack(id, name, deposit) {
        let addAccount = new Account(id, name, deposit);
        let newNode = new Node(addAccount, null, this.tail) //puts listItem into a new node linked after current tail
        if (this.tail != null) { //if list not empty
            this.tail.next = newNode; //former tail now links (via next) to newNode 

        } else {

            this.head = newNode; //if list was empty, head will also be the new name/node

        }
        this.tail = newNode; //set newNode as the new tail of the linked list
    }

    //removes (and returns) item from head of linked list
    cutHead() {
        //if not empty
        if (this.head != null) {
            let removeItem = this.head;
            //if this is only node left
            if (this.head == this.tail) {
                //linked list head and tail now null
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            return removeItem.value;
        }
        //otherwise list was empty, return null
        else return null;
    }

    //removes (and returns) item from tail of linked list
    cutTail() {
        //if not empty
        if (this.tail != null) {
            let removeItem = this.tail;
            //if this is only node left
            if (this.head == this.tail) {
                //linked list head and tail now null
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removeItem.value;
        }
        //otherwise list was empty, return null
        else return null;
    }

    //returns array of accounts matching a search value
    searchName(value) {
        let checkNode = this.head;
        let results = [];
        let found = false;

        while (checkNode != null) {
            if (checkNode.value.name.toUpperCase() == value.toUpperCase()) {
                results.push(checkNode.value);
                found = true;
            }
            checkNode = checkNode.next
        }
        if (found) {
            return results;
        } else return null;

    }

    searchID(value) {
        let checkNode = this.head;
        let results = [];
        let found = false;

        while (checkNode != null) {
            if (checkNode.value.id == value) {
                results.push(checkNode.value);
                found = true;
            }
            checkNode = checkNode.next
        }
        if (found) {
            return results;
        } else return null;

    }

    searchDeposit(value) {
        let checkNode = this.head;
        let results = [];
        let found = false;

        while (checkNode != null) {
            if (checkNode.value.deposit == value) {
                results.push(checkNode.value);
                found = true;
            }
            checkNode = checkNode.next
        }
        if (found) {
            return results;
        } else return null;

    }
    //converts contents to array for display
    contents() {
        let arrayContents = [];
        let checkNode = this.head;
        while (checkNode != null) {
            arrayContents.push(checkNode.value);
            checkNode = checkNode.next;
        }
        if (arrayContents)
            return arrayContents;
    }
}

//GETS for linked list solution
let accountsLL = new LinkedListAccount();
accountsLL.addBack(1, 'alex', 5);
accountsLL.addBack(2, 'sarah', 5);
accountsLL.addBack(3, 'jim', 15);


//finds account/s matching provided name - LINKED ACCOUNT LIST
app.get('/search_account_list_name', function (req, res) {
    let name = req.query.name;
    let nameMatches = accountsLL.searchName(name);
    res.json(nameMatches);
})

//returns accounts matching provided ID - LINKED ACCOUNT LIST
app.get('/search_account_list_ID', function (req, res) {
    let id = req.query.id;
    let idMatches = accountsLL.searchID(id);
    res.json(idMatches);
})

//retrieves accounts matching provided deposit amount - LINKED ACCOUNT LIST
app.get('/search_account_list_deposit', function (req, res) {
    let deposit = req.query.deposit;
    let depMatches = accountsLL.searchDeposit(deposit);
    res.json(depMatches);
})

//retrieves all accounts - LINKED ACCOUNT LIST
app.get('/list_all_linked_accounts', function (req, res) {
    res.json(accountsLL.contents);
})
