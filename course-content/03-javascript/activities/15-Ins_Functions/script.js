// Functions are reusable blocks of code that perform a specific task
// This is a function declaration 


function declareHello() { 
  console.log("Hello, I am a function declaration.");
  console.log("-----------------------------------");
  // Return stops the execution of a function
  var sum = 1 +1;
  return sum;
  // console.log("Meow");
};

// This is a function expression
var expressHello = function() { 
  console.log("Hello, I am a function expression.");
  console.log("-----------------------------------");
  return;
};

// Functions must be called to execute
var output = declareHello(); 
console.log(output);

expressHello();
//Functions can be called again to make the block of code execute again
declareHello(); 
declareHello(); 
declareHello(); 
declareHello(); 
expressHello();
expressHello();
expressHello();
expressHello();
expressHello();

console.log("********");

// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(x,y,z) { 
  console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z );
  console.log("-----------------------------------");
  return 
}

// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
declareHelloAgain(7, "Hello", true);
declareHelloAgain(13, "Meow", "bacon");

console.log("********");

//Hoisting - Hoisting is JavaScript's default behavior of moving declarations to the top.
//Hoisting is JavaScript's behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
    console.log(thing);//undefined
    var thing = "cat";
    console.log(thing);//'cat'

    // funExpression("Farley");//Uncaught TypeError: funExpression is not a function

     var funExpression = function(params){
        console.log("Hello " + params);
      };

     funExpression("Farley");

     declaration("Asher Baba");//can be Hoisted

     function declaration(placeholder){
      console.log("Hello " + placeholder);
     };

     declaration("Asher Baba");


     function funDeclaration(){
      console.log("Hello Kitty" );
     };

     funDeclaration()


// ===========

var lastName = "wittles"
var title = "sir"

function sayName(lastName){
  var firstName = "farley";
  console.log(firstName + " " + lastName);
};


sayName("wittles");//"Farley Wittles"
sayName("Furrball");//"Farley Furrball"
sayName("The Cute");//"Farley The Cute"

function catMeow(firstName){
  console.log(firstName + " " + lastName);
};

catMeow("bob");//bob wittles 
catMeow("sally");//sally wittles 



// =================



var state = 'CA';


console.log(state);

var brushTeeth = false;
var pj = false;
var hydrated = false;

// Encapsulated work
// A JavaScript function is a block of code designed to perform a particular task. 
// A JavaScript function is executed when "something" invokes it (calls it).
function bedTimeMode(){
  brushTheTeeth();
  putPjON();
  drinkWater();
  checkBedTimeConditions();
};

function checkBedTimeConditions(){
  if(brushTeeth && pj && hydrated){
    console.log("Sleepy TIme")
  }
};

function brushTheTeeth(){
  console.log("we are brushing");
  brushTeeth = true;
};

function putPjON(){
  console.log("we putting on PJ");
  pj = true;
};

function drinkWater(){
  console.log("we are drinnking water");
  hydrated  = true;
};

bedTimeMode();

function bedTime(){
  console.log("we are brushing");
  brushTeeth = true;

  console.log("we putting on PJ");
  pj = true;

  console.log("we are drinnking water");
  hydrated  = true;
  if(brushTeeth && pj && hydrated){
    console.log("Sleepy TIme")
  }
};


// Call Back Functions
function iTakeArgs(num, str, params){
  console.log(num, str, params)
  return [num, str, params];
};

iTakeArgs(13, "cat", ["arr"])

function iTakeArgsToo(nums, str, params, cb){
  console.log(nums, str, params)
  cb([nums, str, params]);
};

function iAmFun(placeholder){
  console.log("I am a named funciton and these are the args: ", placeholder);
};

iTakeArgsToo(13, "cat", ["arr"], iAmFun)


iTakeArgsToo(13, "cat", ["arr"], function(placeholder){
  console.log("This is an anonymous function sometimes called a lambda: ", placeholder);
});

