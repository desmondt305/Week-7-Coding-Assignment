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

function myFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let fullName = myFullName("Desmond", "Turner")
console.log(fullName)


function isGreaterThan100(numbers) {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
}
   return sum > 100;
}
    let numbers = [20, 30, 5, 70];
    let answer = isGreaterThan100(numbers);
 console.log(answer)


 
 function calculateAverage(numbers1) {
    let sum = 0;
    for (let i = 0; i < numbers1.length; i++) {
        sum += numbers1[i];
    }
    return sum / numbers1.length;
}

let numbers1 = [20, 30, 5, 70];
console.log(calculateAverage(numbers1))



function compareAverages(numbs1, numbs2) {
    let sum1 = 0;
    for(let i = 0; i < numbs1.length; i++){
      sum1 += numbs1[i];
  
    }
      let average1 = sum1 / numbs1.length;
   
     let sum2 = 0;
       for(let i = 0; i < numbs2.lenght; i++) {
          sum2 +=  numbs2[i];
  }
       let average2 = sum2 / numbs2.lenght;
      if (average1 > average2);{
        return true ;
      }
  }
     let numbs1 = [20, 30, 70,];
     let numbs2 = [ 10, 5, 3];
  
     console.log(compareAverages(numbs1, numbs2));


     function willBuyDrink(isHotOutside, moneyInPocket) {
      if(isHotOutside && moneyInPocket > 9){
       return true;

      } else {
        return false;
      }
     }
       console.log(willBuyDrink(true, 15));
     
     //This function was made to determine if the conditons were met to drive the convertible.
     // It usese the 2 paramters isSunnyOutside and isGasFull to check if it's sunny outside 
     // and if gas level is greater that 75%.
       function willDriveCovertible(isSunnyOutside, gasIsFull) {
        if(isSunnyOutside && gasIsFull > .75){
        return true; 
        
     } else 
        return false;
    
    }
     console.log(willDriveCovertible(true, .74));
 
