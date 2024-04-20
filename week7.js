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
