function sum(a,b,fnToCall){
    let result =a+b;
    fnToCall(result)
}
function resultsum(data){
    console.log("result "+data);
}

sum(1,2,resultsum)

function cat() {
    console.log("meow")
}
setTimeout(cat , 3 * 1000);