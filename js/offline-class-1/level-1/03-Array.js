// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.arr1 = "this is an array examaple";

// push()
// function pushExample(arr1, element) {
//   console.log("Original Array:", arr1);
//   arr1.push(element);
//   console.log("After push:", arr1);
// }
// pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);









// // filter()
// function filterExample(arr) {
//   console.log("Original Array:", arr);

//   let newArr = arr.filter(function(item) {
//     return item > 3;
//   });
//   console.log("After filter:", newArr);
// }
// filterExample([1, 2, 3, 4, 5]);

// // find()
// function findExample(arr) {
//   console.log("Original Array:", arr);

//   let found = arr.find(function(item) {
//     return item > 3;
//   });
//   console.log("After find:", found);
// }
// findExample([1, 2, 3, 4, 5]);

// // sort()
// function sortExample(arr) {
//   console.log("Original Array:", arr);

//   arr.sort(function(a, b) {
//     return a - b;
//   });
//   console.log("After sort:", arr);
// }
// sortExample([5, 2, 3, 4, 1]);
