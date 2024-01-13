// 1.) Display

/*
// How to display things to the console.
console.log("I like to Code!");
console.log("It refreshes my mind :)");

/*
This 
is 
a 
multiline 
Comment
--/ comment (/)

// How to display an arlet box
window.alert("I really Love Coding!");




// 2.) Variables


// Two Steps:
// - Declaration (var, let, const)
// - Assignment
let age; // Declare

// Number
age = 21;
console.log(age); // Printing

// or

// Number
let Another_Age = 22;
console.log(Another_Age); // Printing

// Number
age += 2; // adding two to age
console.log(age); // Printing


// String
let Stu_Name = "Jabez";
console.log(Stu_Name);

// Boolean
let Attended = true;

// If statement
if(Attended == true) {
    console.log("Good" + " " + Stu_Name + " " + "Did attend :)");
} else {
    console.log(Stu_Name + ": " + "Did not attend :(");
}

// String addition
let Name = "Jabez";

Name += " Phenomenal";

console.log(Name);

console.log(Name, "Phenomenal 2");


document.getElementById("p1").innerHTML = "Hello " + Stu_Name;
document.getElementById("p2").innerHTML = "You are " + age + " old";
document.getElementById("p3").innerHTML = "You were " + Another_Age + " old";




/*
3.) Arithmetic expression


Arithmetic expression is the combination of...
operands (values, variables, etc.)
operators (+ - * / %) 
that can be evaluated to a value
e.g y = x + 1
--/ comment (/)


let students = 34; // Declaring and Assigning
// students = students + 1;
// OR Augmented Assigment Operator
students += 1; // =35

// students = students - 1;
// OR Augmented Assigment Operator
students -= 1; // =34

// students = students * 2;
// OR Augmented Assigment Operator
students *= 2; // =68

// students = students / 2;
// OR Augmented Assigment Operator
students /= 2; // =34

console.log(students);

// Modulus -- Returns the remaider
let extraStudents = 30;
// extraStudents = students % 6;
extraStudents %= 7; // Augmented Assigment Operator
console.log(extraStudents);

// Odd and Even. Every Number to mudulus two is Even if,
// the remainder is 0 and Odd is the remainder is 1

let even = 30;
even = even % 2;
console.log(even);

let Odd = 7;
Odd = Odd % 2;
console.log(Odd);

/*
Operator Precedence.
- Parenthesis ()
- Exponets
- Multiplication & Division
- Addition & Substration
--/ comment (/)


// 4.) How to accept the user input

// Easy way with a window prompt
let userName = window.prompt("What is your name? ");
console.log(userName);

// Complex way with the HTML textbox
let myName;

document.getElementById("submit").onclick = function(){
    myName = document.getElementById("myText").value;
    console.log(myName);
    document.getElementById("lbName").innerHTML = "Hello " + myName;
} --/ comment(/)

// Type Conversion = Change the datatype of a value to another 
//                    (String, Numbers, Booleans)

let Age = window.prompt("How old are you?"); // Getting the user info

console.log(typeof(Age)); // Getting the dataType of the Age before conversion

Age = Number(Age); // Convert string to Number

console.log(typeof(Age)); // Getting the dataType of the Age after conversion

Age += 1;

console.log("Happy Birthday, You are ", Age, " old");
--/ comment(/)

let x;
let y;
let z;
let q;

x = Number("3.12") // Convert String to Number
console.log(x, typeof(x));

y = String(3.1213) // Convert Number to String
console.log(y, typeof(y));

// Empty quotes = False, Anything else (any type of string) = True
// It can be used when getting user input, if the did not type in anything
// then will get False return and if the typed something then will get true
// return
z = Boolean("") // Convert Number to String
console.log(z, typeof(z));

q = Boolean("Is Coding") // Convert Number to String
console.log(q, typeof(q));
--/ comment(/)

// const = a variable that can not be changed
// Circle
// C = 2*PI*R
// R = Radius

let circumference;
const PI = 3.14159;
let radius;


radius = window.prompt("Enter the radius of the circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is: ", circumference);

--/ comment(/)

// Math Function = An intrinsic object that provides basic mathematics
// functionality and constants

let x = 3.67122;
let y = 3.67322;
let z = 3.67142;
let q;

x = Math.round(x); // Round Up
y = Math.floor(y); // Returns the greatest integer less than or equal to its numeric argument.
y = Math.ceil(y); // Returns the smallest integer greater than or equal to its numeric argument.
z = Math.random(); // Returns a pseudorandom number between 0 and 1.
z = Math.pow(x, 2); // x = Base, 2 = Exp
X = Math.sqrt(x, 3); // Cube root
x = Math.abs(x); // Distance from zero
q = Math.min(x, y, z);
q = Math.max(x, y, z);
q = Math.PI;

console.log(x);
console.log(y);
console.log(z);

--/ comment(/)


// Find the hypotenuse


// C = SQRT(X^2+Y^2)

let X = window.prompt("Enter the X Value");
X = Number(X); // Convert String X into a Number

let Y = Number(window.prompt("Enter the Y Value")); // Getting User Input and 
                                                    // Converting it to a Number

C = Math.sqrt(Math.pow(X,2) + Math.pow(Y,2));

console.log("The circum is:", Math.round(C));

--/ comment(/)

let a;
let b;
let c;

document.getElementById("BtnSubmit").onclick = function() {
    a = Number(document.getElementById("sideA").value);
    b = Number(document.getElementById("sideB").value);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
     
    document.getElementById("sideC").value  = Math.round(c.toString());
}

--/ comment(/)
let count = 0;

document.getElementById("BtnDecrease").onclick = function() {
    count -= 1;
    document.getElementById("lbCount").innerHTML = count;
}

document.getElementById("BtnReset").onclick = function() {
    count = 0;
    document.getElementById("lbCount").innerHTML = count;
}

document.getElementById("BtnIncrease").onclick = function() {
    count += 1;
    document.getElementById("lbCount").innerHTML = count + 1;
}

--/ comment(/)

// Random Fuction
let randomNumber = Math.floor((Math.random() * 6) + 1); // Round Down
console.log(randomNumber);

document.getElementById("BtnRollThreeDies").onclick = function() {
    let randomNumber = Math.floor((Math.random() * 6) + 1); // Round Down
    let randomNumber2 = Math.floor((Math.random() * 6) + 1);
    let randomNumber3 = Math.floor((Math.random() * 6) + 1);

    document.getElementById("lbRollDie1").innerHTML = randomNumber;
    document.getElementById("lbRollDie2").innerHTML = randomNumber2;
    document.getElementById("lbRollDie3").innerHTML = randomNumber3;
}

--/ comment(/)

// String properties and methods

let userName = "   Jabez Phenomenal   ";

let stringLength = userName.length; // String length
console.log(stringLength); 

let firstLetter = userName.charAt(3); // First letter
console.log(firstLetter);

let inderOfChar = userName.indexOf("J");
console.log(inderOfChar);

let lastIndexOfChar = userName.lastIndexOf("a"); // The last char
console.log(lastIndexOfChar); // If negative one (-1) then no char

let trimString = userName.trim();
console.log(trimString); // Trim both Start and End

let trimStringStart = userName.trimStart();
console.log(trimStringStart); // Trim Start of a string

let trimStringEnd = userName.trimEnd();
console.log(trimStringEnd); // Trim the end of the string

console.log(userName.toUpperCase()); // toUpperCase
console.log(userName.toLowerCase()); // toLowerCase

let phoneNumber = "071-411-8574";

phoneNumber = phoneNumber.replaceAll("-", " "); // replace the "-" with "spaces"
console.log(phoneNumber); 

--/ comment(/)

// slice() = extract a section of a string and returns returns
//           it as a new string, without modifying the origional
//           string

let userName = "Jabez Phenomenal";

// Does not include the last charecter
let secondName = userName.slice(6); // it will copy all the chars after index 5
console.log(secondName); // Starting index is 5

// Does not include the last charecter
let firstName = userName.slice(0, 5); // Copy from idex 0 to 5
console.log(firstName); // Start index = 0, End index = 5

secondName = userName.slice(userName.indexOf(" ") + 1); // Slice using the IndexOf then add one to remove the space
console.log(secondName); // Starting with the first char

firstName = userName.slice(0, userName.indexOf(" "));
console.log(firstName); // Starting with the first char

--/ comment(/)

// Method channing = calling one menthod after another in one
//                   continuous line of code.

let myName = "phenomenal";

// Normal way with lot of coding lines
let letter = myName.charAt(0);

letter = letter.toUpperCase();

console.log(letter);

// Method channing, With one line
let Letter = myName.charAt(0).toUpperCase(); // charAt and toUpperCase at same line
console.log(Letter);

--/ comment(/)

// if Statement = A basic form of disicion making.
//                if a condition is true, Do Something,
//                if a condition id false, Do Nothing.
// The order of the if Statements does matter.

let age = 21;

if(age >= 18) {
    console.log("Permitted to Drink Wine");
} 
else if(age <= 90) {
    console.log("Too Old, get one glass of wine and go home!!!");
} 
else {
    console.log("Not permitted!!! Too young to get a drink!!!");
}

--/ comment(/)

document.getElementById("BtnSubscribe").onclick = function() {
   
    const myCheckBox = document.getElementById("checkbox");
    
    if(myCheckBox.checked) {
        console.log("You are subscribed!");
    } 
    else {
        console.log("You are not subscribed!");
    }
}

--/ comment(/)

document.getElementById("BtnCardUse").onclick = function() {
   
    const myCheckBoxVisa = document.getElementById("visaBtn");
    const myCheckBoxMaster = document.getElementById("masterBtn");
    const myCheckBoxPaypal = document.getElementById("paypalBtn");
    
    if(myCheckBoxVisa.checked) {
        console.log("Card to Use Visa Card!");
    } 
    else if(myCheckBoxMaster.checked) {
        console.log("Card to Use Master Card!");
    }
    else if(myCheckBoxPaypal.checked) {
        console.log("Card to Use PayPal!");
    } 
    else {
        console.log("Select a payment option!");
    }
}

--/ comment(/)

// Switch statements = Statement that examines a value for a
//                     match against many case clauses.
//                     More effecient than many "else if" statements

let grade = "D";

switch(grade) {
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You did fine!");
        break;
    case "F":
        console.log("You Failed!");
        break;
    default:
        console.log(grade, "is not a grade!!!");
        break;
}

let marks = 98;

switch(true) {
    case marks >= 90:
        console.log("A", "You did great!");
        break;
    case 80 <= marks && marks < 90:
        console.log("You did good!");
        break;
    case 70 <= marks && marks < 80:
        console.log("You did okay!");
        break;
    case 50 <= marks && marks < 70:
        console.log("You did fine!");
        break;
    case marks < 50:
        console.log("You Failed!");
        break;
    default:
        console.log(marks, "Did not provide a mark!!!");
        break;
}

--/ comment(/)

// The (&& AND) and (|| OR) Operators = they give us the ability
//                                      to check more than one
//                                      condition concurrently.
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

let temperature = 15;

if(temperature > 0 && temperature < 30) {
    console.log("The weather is good!");
}
else {
    console.log("The weather is bad!");
}

if(temperature > 0 || temperature < 30) {
    console.log("The weather is good!");
}
else {
    console.log("The weather is bad!");
}

--/ comment(/)

// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false -> true

let temperatur = 15;

if(!(temperatur > 0)) {
    console.log("Cold!");
} 
else {
    console.log("Hot!");
}

let sunny =  true;

if(!sunny) {
    console.log("It's Cloudy Outside!");
}
else {
    console.log("It's Sunny Outside!")
}



// While loop = repeat some code while some condition is true
//              potentially infinite

let userNam = "";

while(userNam == "" || userNam == null) {
    userNam = window.prompt("Enter UserName!!!");
}

console.log("Hello", userNam);


// Do while loop = Do something,
//                 then check the condition,
//                 repeat if the condition is true.

let useNam = "";

do{
    useNam = window.prompt("Enter UserName!!!");
} while(useNam == "")

console.log("Hello", useNam);



// for loop = repeat some code a certain amount of times

for(let x = 0; x < 10; x++) {
    console.log(x);
}

for(let i = 100; i >= 1; i--) {
    console.log(i);
}




// break = breaks out of the loop entirely.
// continue = skips an iteration of a loop

for(let i = 0; i < 20; i++) {
    if(i == 13) break; // Break entirely out of this loop

    console.log(i);
} 

for(let i = 0; i < 20; i++) {
    if(i == 13) continue; // Skips 13

    console.log(i);
} 



// Nested loop = a loop inside of another loop

// Repeat the inner loop four times. 
for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 3; j++) {
        console.log(i);
    } 
}



let symbol = window.prompt("Enter symbol to use!");
let rows = window.prompt("Enter # of rows!");
let cols = window.prompt("Enter # of cols!");

for(let i = 1; i <= rows; i++) {
    for(let j = 1; j <= cols; j++) {
        document.getElementById("rec").innerHTML += symbol#;
    } 
    document.getElementById("rec").innerHTML += "<br>";
}





// Function = Define code once, and use it many times.
//            To perform some code, call the function name.

// Global var
let userN = "Pheno";
let age = 20;

function HappyBirthdayToYou() {
    console.log("Happy birthday to you!!!:)");
    console.log("Today", userN, "is", age, "years old");
}

HappyBirthdayToYou();



// With arguments and Parameters
function startProgram() {
    let userNm = "Pheno";
    let years = 20;

    // Perform subroutine of code.
    HappyBirthda(userNm, years); // args
}

function HappyBirthda(userNm, years ) { //Param
    console.log("Happy birthday to you!!!:)");
    console.log("Today", userNm, "is", years, "years old");
}

startProgram();




// return = returns a value back to the place where you 
//          invoked a function

let area;
let width = window.prompt("Enter the width");
let height = window.prompt("Enter the height");

area = calArea(width, height);

function calArea(width, height) {
    let result = width * height;

    return result;
}

console.log("Area =", area);



// ternary operator = shortcut for 'if/else statement'
//                    Takes three steps
//                    - Condition with ?
//                    - Expression if true :
//                    - Expression if false

// Condition ? ExpressionIfTrue : ExpressionIfFalse

let adult = checkAge(20);

console.log(adult);

function checkAge(age) {
    if(age > 18) {
        return true;
    }
    else {
        return false;
    }
}

// Alternatively

function checkAge(age) {
    return age > 18 ? true : false;
}


// Another Example

let won = wonGame(true);

console.log(won);

function wonGame(won) {
    return won ? "You win the game" : "You lost the game"; 
}



// Variable scope = is where a variable is accessible.

// let = variables are limited to block scope {}
// var = variables are limited to function() {}

for(let i = 1; i <= 3; i++) {
    console.log(i);
}
console.log(i) // does not display 'i' since is accessible only between {} of the for loop. 


for(var i = 1; i <= 3; i++) {
    console.log(i);
}
console.log(i); // Displays the 'i' because of var



// Template literals = delimited with (`)
//                     instead of double or single qoutes
//                     allows the embedded variables and expressions

let myName = "Phenomenal";
let items = 3;
let total = 54;

//console.log("Hello", myName);
//console.log("You have", items, "items in your cart");
//console.log("Your total is $", total);

console.log(`Hello ${myName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $ ${total}`);


let text = `Hello ${myName}, you have ${items} items in your cart. Your total is $ ${total}`;
console.log(text);



// tolocaleString() = returns a string with a languuage 
//                    sensitive representation of this number

// number.tolocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 1233434.789;

myNum = myNum.toLocaleString("en-US"); // US English.
myNum = myNum.toLocaleString("hi-IN"); // Hindi.
myNum = myNum.toLocaleString("de-DE"); // Standard German
console.log(myNum);


let myNumber = 1233434.789;
myNumber = myNumber.toLocaleString("en-US", {style: "currency", currency: "USD"}); // US English
console.log(myNumber);

let myNumb = 1233434.789;
myNumb = myNumb.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); // US English
console.log(myNumb);

let myNumbe = 1233434.789;
myNumbe = myNumbe.toLocaleString("de-DE", {style: "currency", currency: "EUR"}); // US English
console.log(myNumbe);

let myNumberr = 0.10;
myNumberr = myNumberr.toLocaleString(undefined, {style: "percent"}); // Percent
console.log(myNumberr);

let myNumberrr = 0.85;
myNumberrr = myNumberrr.toLocaleString(undefined, {style: "unit", unit: "celsius"}); // units
console.log(myNumberrr);




// Program to guess a number
const result = Math.floor((Math.random()) * 100 + 1); 

let guesses = 0; // Keeping track of number of guesses made

document.getElementById("submitB").onclick = function() {
    let guess = document.getElementById("guessField").value;

    guesses += 10; // Keeping track of number of guesses made

    if(guess == result) {
        alert(`${result} is the #. It took you ${guesses} guesses`);
    }
    else if(guess < result) {
        alert("Too Small!");
    }
    else if(guess > result) {
        alert("Too Large!");
    }
}


*/

// Program to convert from Celsius to Fahrenheit <-> from Fahrenheit to Celsius.
let temperatures = 32;

temperatures = toCelsius(temperatures);
console.log(temperatures);

temperatures = toFahrenheit(temperatures);
console.log(temperatures);

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp) {
    return temp * 9/5 + 32;
}


document.getElementById("submitBu").onclick = function() {
    let tempe;

    if(document.getElementById("cButton").checked){
        tempe = document.getElementById("textBox").value;
        tempe = Number(tempe);
        tempe = toCelsius(tempe);

        document.getElementById("tempLabel").innerHTML = tempe + "°C"; // hold in alt key and press 0176
    }
    else if(document.getElementById("fButton").checked){
        tempe = document.getElementById("textBox").value;
        tempe = Number(tempe);
        tempe = toFahrenheit(tempe);

        document.getElementById("tempLabel").innerHTML = tempe + "°F";
    }
    else {
        document.getElementById("tempLabel").innerHTML = "Select Unit";
    }

}













