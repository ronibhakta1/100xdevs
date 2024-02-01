let array = [11,12,13,14,15,16,17,18,19,100];
let a;
for (let index = 0; index < array.length/2; index++) {
    let a = array[index]
    array[index]=array[array.length - 1 - index]
    array[array.length -1 - index] = a;

    
}
console.log(array)




let aaaaaa = [11, 12, 13,11,23,42,54, 14, 15, 16];

for (let index = 0; index < (aaaaaa.length / 2); index++) {
    // Swap elements at index and aaaaaa.length - 1 - index
    let temp = aaaaaa[index];
    aaaaaa[index] = aaaaaa[aaaaaa.length - 1 - index];
    aaaaaa[aaaaaa.length - 1 - index] = temp;
}

console.log(aaaaaa);
