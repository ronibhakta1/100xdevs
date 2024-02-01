const fs = require('fs');

var a = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo")
    },1000)
})


function callback(){
    console.log(a)
}
console.log(a)
a.then(callback);



