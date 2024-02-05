const fs = require("fs");
// console.log(fs)

fs.readFile("./js/async/a.txt", "utf-8",function(err,data){
    console.log(data);
}); 

// let a = 0;
// for (let index = 0; index <100000000000000000; index++) {
    
//     a++;
// }
// console.log(a);
    
    console.log("hello");
