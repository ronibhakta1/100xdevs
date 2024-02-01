// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index );
  });
  
}
forEachExample([1, 2, 3]);


// forEach()
function fun1(arr) {
    console.log("Original Array:", arr);
  
  }
  fun1([1, 2, 3]);
  arr1= [1,2,3,4,5,6,7,8,9,10];
  arr1.forEach(fun1)
//here it takes function as an arguments
