// Array for the ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93,100] 
let sum = 0;
//ages[ages.length -1] calls the last number in the string.
  let result =  ages[ages.length -1] - ages[0];

   console.log(result);

   
  
///For loop. Ages.length uses all the numbers in the array.
  for (let i = 0; i < ages.length; i++) {
      
    sum += ages[i];
}  

let average  = sum / ages.length;
console.log(average);

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; 
let totalLetters = 0;

// names.length uses the total of all the names in the array.
  for (let i = 0; i < names.length; i++) {
    //  the += Is an addition assignment.

    totalLetters += names[i].length;
}// Took the total letters then divided it by the total amount of names.
let averageLetters = totalLetters / names.length;

console.log(averageLetters)

let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + " ";
}
console.log(concatenatedNames);

//Question? How do you accsess the last element in an array? by using array[array.lenght -1]
// How to access the first element of an array? array[0]

let name = ["Ronny", "Bill", "Mel"];
let nameLengths = [5, 4, 3];

for (let i = 0; i < name.length; i++) {
/// .push used to add the new element
    nameLengths.push
}
console.log(nameLengths);

// The two paramaters that are used are word and n.
function myFunction(word, n) {
   // let result = "" is an empty string that can be used later.
    let result = "";
    // The value of n is three so that's how many times the word will be repeated.
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}

let word = "word";
let n = 3;
console.log(myFunction(word, n));



