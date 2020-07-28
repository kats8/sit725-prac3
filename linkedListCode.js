
//attempt using classes and linked list (using nodes)
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

//simulator is list of people
/* Heartbeat simulator class, to associate name with heartbeat, randomly generate heart rate and post to console every second */
class HeartBeatSimulator {

        constructor() {
    
                this.head = null; 
                this.tail = null; 
        
    } 
    
        addPersonHead(name) {
    
                var newName = new Node(name, this.head, null) 
                if (this.head != null) { //if list not empty
                        this.head.prev = newName; //current head points back to newName
            
        } else {
        
                        this.tail = newName; //if list was empty, tail will also be the new name/node
            
        } 
                this.head = newName; 
            constructor(name) {
        
                    //person's name
                    this.name = name; 
                    //heartbeats per minute - initially null
                    this.bpm = null; 
                    this.MakeBeat(); 
        } 
        
            /* coded out function - can't make this work within the class? 
        beats() {
     
            if (this.head != null) {
                var stepOn = true;
                var thisNode = this.head;
                while (stepOn) {
                    //get random heartbeat in feasible “human” range - Math.floor used to display as integer
                    let bpmRand = 60 + Math.floor(Math.random() * 40);
                    console.log(thisNode.value + "'s heartbeat = " + bpmRand, '\n');
                    if (thisNode.next != null) {
                        thisNode = thisNode.next;
                    } else {
                        stepOn = false;
                    }
        
        
                }
                
            } else {
                console.log("No heartbeats monitored.")
            }
        } */
        
        
    } 
    
    
    biosim = new HeartBeatSimulator(); 
    biosim.addPersonHead("Debbie"); 
    biosim.addPersonHead("Harry"); 
    biosim.addPersonHead("Paul"); 
    
    //biosim.beats();
    
    function beats() {
    
        
            if (biosim.head != null) {//if null, simulator has no people!
                    var stepOn = true;   //variable to track if we keep traversing linked list
                    var thisNode = biosim.head; 
                    while (stepOn) {
            
                            //get random heartbeat in feasible “human” range - Math.floor used to display as integer
                            let bpmRand = 60 + Math.floor(Math.random() * 40); 
                            console.log(thisNode.value + "'s heartbeat = " + bpmRand, '\n'); 
                            if (thisNode.next != null) {
                
                                    thisNode = thisNode.next; 
                    
                } else {
                
                                    stepOn = false; //made fales when next is null (end of list)
                    
                } 
                
            } 
                RandomHeartRate() {
            
                                //Get random integer between 60 and 100 and assign to heartbeat
                                let bpmRand = 60 + parseInt(Math.random() * 40); 
                                this.bpm = bpmRand; 
                                console.log(this.name + "'s heartbeat = " + this.bpm, '\n'); 
                
            } 
            
            
        } else {
        
                    console.log("No heartbeats to monitor.") 
                MakeBeat() {
            
                        setInterval(() => { this.RandomHeartRate() }, 1000); 
            } 
            [41m   
     } 
        
        //use SetInterval function to run every second
        var interval = setInterval(beats, 1000); 
        
        /* A solution without classes and using arrays
    //an array to store people's names
    var people = new Array();
    people.push("Tanya");
    people.push("Bill");
    people.push("Jessica");
    
    //our heartBeats function runs every second - uses setInterval to do this
    var interval = setInterval(heartBeats, 1000);
    
    //function to run through people and output heartbeat rate
    function heartBeats() {
        console.log("HEARTBEAT UPDATE:");
            for (var i = 0; i < people.length; i++) {
                //get random heartbeat in feasible “human” range - Math.floor used to display as integer
                let bpmRand = 60 + Math.floor(Math.random()*40);
                console.log(people[i] + ": " + bpmRand + "bpm");
            }
    }
    */
        var paulBiosim = new HeartBeatSimulator("Paul"); 
        var debbieBiosim = new HeartBeatSimulator("Debbie"); 
        var jasonBiosim = new HeartBeatSimulator("Jason"); 