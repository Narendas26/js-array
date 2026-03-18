const friends = ["Balam", "Habib", "Hridoy"];

// Basic Array Before Shifting:
console.log("Main Element of Array:  ",friends);

//Shifting (remove) First Element from Array:
const out1 = friends.shift();

// After Shifting The array:
console.log("After shifting the Element of Array:  ",friends);

//Shifted Element:
console.log("Shifted Element: ",out1);

//Unshift(add) Element at first of the array:
friends.unshift("Arnab"); //এটাকে কোন ভেরিয়েবলে রাখা যাবে না কারণ unshift এরের নতুন এলিমেন্ট রিটার্ন করে না জাস্ট এরের লেন্থ বা দৈর্ঘ্য রিটার্ণ করে

// After Unshifting:
console.log("After Unshifting (adding) Element: ", friends);

//Unshifted Element:
console.log("Unshifting Element:  ",friends[0]);