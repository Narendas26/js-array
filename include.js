const friends = ["Balam", "Habib", "Hridoy"];

// includes check that the written item inside itself is available or not in the dedicated array. If yes it return true otherwise it return false
console.log(friends.includes("Arnab")); //it return false

console.log(friends.includes("Balam")); //it return true

console.log(friends.includes("balam")); //it return false because it is case sensitive


// Practical Implementation of include 
if(friends.includes("Balam")){
    console.log("Lets make a party!");
}
else{
    console.log("No Party Will Happened!");
}