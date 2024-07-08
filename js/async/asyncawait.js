function ronisAsyncFunction(){
    console.log("Inside promise function");
    return new Promise(function(resolve){
        resolve("hi there");
        console.log("Outsdie promise funtion");
    });
}

async function main(){
    console.log('in main funtion')
    const value = await ronisAsyncFunction();
    console.log(value);
    console.log("Main function end\n")
}
main();


// // printing without await 


// function ronisAsyncFunction1(){
//     console.log("Inside promise function\n");
//     return new Promise(function(resolve){
//         resolve("hi there");
//         console.log("Outsdie promise funtion");
//     });
// }

// async function main1(){
//     const value = ronisAsyncFunction1();
//     console.log(value);
//     console.log("Main function end\n")
// }
// main1();

// // same thing using setTimeout in above code

// function ronisAsyncFunction2(){
//     console.log("Inside promise function");
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("hi there");
//         },2000)
        
//         console.log("Outsdie promise funtion");
//     });
// }

// async function main2(){
//     const value = ronisAsyncFunction2();
//     console.log(value);
//     console.log("Main function end")
// }
// main2();

