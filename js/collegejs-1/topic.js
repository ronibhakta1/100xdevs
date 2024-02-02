// Array 

let array = [1, 23, 4, 5, 6, 7, 8, 8];
for (let index = 0; index < array.length; index++) {
    console.log(array[index])

}

let arr1 = ["male", "female"] // string
let arr2 = ["roni", "xyz"]

for (let index = 0; index < arr1.length; index++) {
    console.log(arr2[index] + " is " + arr1[index]);

}

// objects key:values

const arr3 = [{
    firstname: "roni",
    gender: "male"
}, {
    firstname: "rakesh",
    gender: "male"
},
{
    firstname: "anaya",
    gender: "female"
}]

for (let int = 0; int < arr3.length; int++) {
    if (arr3[int]["gender"] == "male") {
        console.log("\n" + arr3[int]["firstname"] + " is " + arr3[int]["gender"])
    }
    else {
        console.log("\n" + arr3[int].firstname + " is " + arr3[int].gender)
    }

}

// json --> javascript object notation

function jsonMethods(jsonString) {
    console.log("\nOriginal JSON String:", jsonString);

    // Parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString);
    console.log("\nAfter JSON.parse():", parsedObject);

    // Stringifying JavaScript object to JSON string
    let jsonStringified = JSON.stringify(parsedObject);
    console.log("\nAfter JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
    '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);

let object1= '{"name" : "Roni","age" : 21}'
const user = JSON.parse(object1)
console.log(user)
const user1 = JSON.stringify(user);
console.log(user1)
const user2 = JSON.parse(user1)
console.log(user2)

console.log(object1)

// callbacks 

function sum(a,b,fnToCall){
    let result =a+b;
    fnToCall(result)
}
function resultsum(data){
    console.log("result "+data);
}

sum(1,2,resultsum)

//set time out & set interval asynchonous

function cat() {
    console.log("meow")
}
setTimeout(cat , 3 * 1000);
setInterval(cat,4000)

//promises

// using callback 
// callback is ugly way to write async function because you will face callback hell
// ugly way creating a wapper on top on another async function which is ok but not effecient to use 
// create an a.txt file

const fs = require('fs');

// my own ansync function ugly way
function RonisReadFile(cd){ // <-3
    console.log("Inside  Readfile function");
    fs.readFile("./js/async/a.txt","utf-8", function(err,data){
        cd(data);
    });
    console.log("Outside readfile function");
}

// callbackfunction to call

function onDone(data){
    console.log("Inside ondone function");
    console.log(data); // <-2
}

console.log("End of the code")
RonisReadFile(onDone); // <-1

// o/p
// End of the code
// Inside  Readfile function
// Outside readfile function
// Inside ondone function
// hefdsfbskfbdkafa

// cleaner way to do async funtion using promises

const fs = require('fs');

// my own Async function

function ronisReadFile(){
    return new Promise(function(resolve){
        console.log("Inside the promise function");
        fs.readFile("./js/async/a.txt", "utf-8" ,function(err,data){
            resolve(data);
        });
        console.log("Outside the promise function")
    })
}

// callbackfunction to call
function onDone(data){
    console.log("Inside the onDone function");
    console.log(data);
}

let a =ronisReadFile();
console.log(a);
a.then(onDone);
console.log("End of the code");

// o/packageInside the promise function
// Outside the promise function
// Promise { <pending> }
// End of the code
// Inside the onDone function
// hefdsfbskfbdkafa

const fs = require('fs');

var a1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo")
    },1000)
})


function callback(){
    console.log(a1)
}
console.log(a1)
a1.then(callback);

/// async/await

function ronisAsyncFunction(){
    console.log("Inside promise function");
    return new Promise(function(resolve){
        resolve("hi there");
        console.log("Outsdie promise funtion");
    });
}

async function main(){
    const value = await ronisAsyncFunction();
    console.log(value);
    console.log("Main function end\n")
}
main();

// o/p
// Inside promise function
// Outsdie promise funtion
// hi there
// Main function end

// printing without await 


function ronisAsyncFunction1(){
    console.log("Inside promise function\n");
    return new Promise(function(resolve){
        resolve("hi there");
        console.log("Outsdie promise funtion");
    });
}

async function main1(){
    const value = ronisAsyncFunction1();
    console.log(value);
    console.log("Main function end\n")
}
main1();

//o/p
// Inside promise function

// Outsdie promise funtion
// Promise { 'hi there' }
// Main function end

// same thing using setTimeout in above code

function ronisAsyncFunction2(){
    console.log("Inside promise function");
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there");
        },2000)
        
        console.log("Outsdie promise funtion");
    });
}

async function main2(){
    const value = ronisAsyncFunction2();
    console.log(value);
    console.log("Main function end")
}
main2();

// o/p
// Inside promise function
// Outsdie promise funtion
// Promise { <pending> }
// Main function end

