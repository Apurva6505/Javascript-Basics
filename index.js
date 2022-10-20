// 1. Ways to print in JS
//console.log("Hello World!");
//console.log("Hello World", 4 + 6, "Another log");
//alert("Hi");
//document.write("This is document write"); //Not recommended

//2. Javascript console API
//console.warn("This is warning");
//console.error("This is an error");
//console.clear(); // clears the console
//console.assert(4 == 6); //checks the condition(pass/fail)

//3. Javascript Variables.....containers to store data values
var number1 = 42;
var number2 = 53;
// console.log(number1+number2);

//4. Data Types in Javascript
//Strings
var str1 = "This is a string";
var str2 = "This is also a string";

//Numbers
var num1 = 500;
var num2 = 75.38;

//Objects
var marks = {
  appu: 97,
  nilesh: 95,
  arpichu: 96,
};
// console.log(marks);

//Booleans
var a = true;
var b = false;
// console.log(a,b);

//undefined
var und;
// console.log(und);

var n = null;
//console.log(n);

/* At a very high level, there are 2 types of data types:-
1. Primitive DT - null,undefined,number,string,boolean,symbol
2. Reference - Arrays and Objects
*/

//Arrays
var arr = [1, 2, "appu", 4, 5];
// console.log(arr);
// console.log(arr[2]);

//5. operators in Javascript

//Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a+b is ",a+b);
// console.log("The value of a-b is ",a-b);
// console.log("The value of a*b is ",a*b);
// console.log("The value of a/b is ",a/b);
// console.log("The value of a%b is ",a%b);

//Assignment Operators
var c = b;
c+=2; // c=c+2; same goes with -,*,/....
// console.log(c);

//Comparison Operators
var x = 44;
var y = 45;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

//Logical Operators

//Logical AND
// console.log(true && true);  //T
// console.log(true && false);  //F
// console.log(false && true);  //F
// console.log(false && false);  //F

//Logical OR
// console.log(true || true);  //T
// console.log(true || false);  //T
// console.log(false || true);  //T
// console.log(false || false);  //F  ....( | - Bitwise OR  /  || - Logical OR )

//Logical NOT
// console.log(!true);
// console.log(!false);

//6. Functions in Javascript...DRY - Don't Repeat Yourself

function avg(a,b){
    return (a+b)/2;
}

c1 = avg(4,6);
c2 = avg(14,16);
// console.log(c1,c2);

//7. Conditionals in Javascript

/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

//8. Loops in Javascript

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
//for loop
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })

//while loop
// const ac = 0;
// ac++;
// ac = ac +1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

//do while loop
// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

//9. Array methods in Javascript

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift() ...1st ele is removed
// const newLen = myArr.unshift("Harry")...new arr  length is returned
// console.log(newLen);
// console.log(myArr);

//10. String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4)).....1 to n-1
d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad");....only 1st occurance is replaced
// console.log(d, myLovelyString)


//11. Dates in Javascript

let myDate = new Date();//....date methods in js - explore
// new - new date
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//12. DOM Manipulation in Javascript

let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText); 

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 
tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element


// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')

// }

//13. Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })

//14. Javascript setTimeout and setInterval


//Arrow Functions
summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
// SetTimeout and setinterval
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

//15. JavaScript localStorage

// localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

//16. About JSON

// Json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literals - Backticks
a = 34;
// console.log(`this is my ${a}`)

// ---------------------------------------------------------------------------------