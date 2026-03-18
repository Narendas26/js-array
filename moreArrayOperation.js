const friends = ["Balam", "Habib", "Hridoy"];
const friends1 = ["Arijit", "Atif Aslam", "Jubin Nautial"];

console.log(friends); //print the array
console.log(Array.isArray(friends)); //It returns True Because it is an array

// join() operation make an array to string
var allSingers = friends.join();

// Print the string
console.log(allSingers);
// Check the type of allSingers
console.log(typeof allSingers);

// Make array to string and separate every element by + sign
var allSingers1 = friends.join('+');

// Print the string
console.log(allSingers1);
// Check the type of allSingers
console.log(typeof allSingers1);

// Make array to string and separate every element by + sign
var allSingers2 = friends.join(' | ');

// Print the string
console.log(allSingers2);
// Check the type of allSingers
console.log(typeof allSingers2);

// Add 2 Array using concat and return result also an array
const result = friends.concat(friends1);

console.log(result);
console.log(Array.isArray(result));

// Slice make a new array from the parent array and do not make any change of the parent array:
const fruits = ["Apple", "Mango", "Orange", "Guava"];

const sliceItem = fruits.slice(1,3);  //it slice 2nd item to 3rd item though we write 3 last limit

console.log(fruits);
console.log(sliceItem);

//Splice: 
const alphabate = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

console.log("Before Splice: ", alphabate);

alphabate.splice(5,2);  //This method remove 2 elements from index 5

console.log("After splice: ", alphabate);

alphabate.splice(2);  //This method remove all elements after from index 2

console.log("After second splice: ", alphabate);
