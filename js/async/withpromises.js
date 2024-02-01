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


