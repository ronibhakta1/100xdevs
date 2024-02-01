const fs = require('fs');

// my own ansync function
function RonisReadFile(cd){
    console.log("Inside  Readfile function");
    fs.readFile("./js/async/a.txt","utf-8", function(err,data){
        cd(data);
    });
    console.log("Outside readfile function");
}

// callbackfunction to call

function onDone(data){
    console.log("Inside ondone function");
    console.log(data);
}

console.log("End of the code")
RonisReadFile(onDone);
