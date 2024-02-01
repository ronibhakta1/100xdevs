function fun1(){
    let a = 0;
for (let index = 0; index < 10000000 ; index++) {
    a++;
}
console.log(a);
}

setTimeout(fun1,1000);
console.log("hello there");
