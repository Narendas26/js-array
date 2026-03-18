const friends = ["Balam", "Habib", "Hridoy"];

const nums = [];

const food = "Ros o gol l a";

const age = 15;

// isArray is a method that returns true if it is an array otherwise it returns false

// Test 1:
console.log(Array.isArray(friends)); //it returns true

// Test 2:
console.log(Array.isArray(nums)); //it returns true

// Test 3:
console.log(Array.isArray(food)); //it returns false

// Test 4:
console.log(Array.isArray(age)); //it returns false

// Test 5: 
console.log(Array.isArray('[]')); //it returns false because it is string

//Test 6:
console.log(Array.isArray(new Array(5))); //it returns true


