var name;
// Q: What does name equal right now?
//=> undefined (memory reserved but doesn't contain anything) 

name = "Tim";
// Q: What is `name` set to right now?
//=> String : "Tim"

name = "Bill";
// Q: What is `name` set to right now?
//=> String : "Bill"

var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
//=> String : "Hello, how are you?"

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
//=> Number : 40

math = high - "5";
// Q: What is `math` set to?
//=> Number : 45  (very nice of JS to convert "5" to 5)

// Create a variable to calculate my age
// The answer should read "Tim is 31 years old"
var born = 1983;
var today = 2015;
//=> var tims_age = "Tim is " + (today - born) + " years old"


// Store some information following in variables.
var yourname = 'Alex';
var myname = 'Tim';

var statement = yourname + " is taking a class at The Iron Yard, and my instructor is " + myname;
