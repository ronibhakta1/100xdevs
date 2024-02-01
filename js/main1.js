let  a = 1;
a= 2;
const b =30;
console.log(b);
console.log(a)

let firstname = "roni"
let age = 21;
let marriagestatus = false;
console.log("\nName is "+firstname+" age is "+age+" marrige status is "+marriagestatus+"\n");


if(marriagestatus == true){
    console.log(firstname+" is married");
}
else{
    console.log(firstname+" is not married\n");
}

let num =0;
for (let int = 0; int <=1000; int++) {
    num =num+ int;
}
console.log(num+"\n");

const arr = [22,33,24,53,6,56,21,55,65,13];

for (let int = 0; int <=arr.length; int++) {
    if (arr[int]% 2 == 0) {
        console.log(arr[int])
    }
    
}


// biggest number in the array program mini proplem solving
let biggestnum = 0;

for (let int = 0; int < arr.length; int++) {
    if (arr[int]> biggestnum) {
        biggestnum = arr[int]
    }
    
}
console.log(biggestnum)

