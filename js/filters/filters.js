/// print all the even numbers from the array 

// ugly way

const array = [1,2,3,4,5]

for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
    console.log(array[index])
    }
    
}

// Using filters

function even(n){
    if(n % 2 ==0){
        return true;
    }else{
        return false;
    }

}

const ans = array.filter(even)
console.log(ans)

// Using arrow function



const ans1 = array.filter((n)=>{
    if(n % 2 ==0){
        return true;
    }else{
        return false;
    }

})
console.log(ans1)
