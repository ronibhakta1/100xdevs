// given an array give me an new array where the elements of actual array is multiplied by 2


const array = [1,2,3,4,5,6,7,8,9,10]

const array2 =[];

for (let index = 0; index < array.length; index++) {
    array2.push(array[index]*2)
    
}
console.log(array2)


//map function

// array => array
// map => map funtion 
// mul => multiplication function
// syntax => array.map(mul)

// using normal functions

function mul(i){
    return i*2;
}

const ans = array.map(mul)
console.log(ans)

//using array functions


const ans1 = array.map( (i) => {
    return i*2;
})
console.log(ans1)