// Write a program that checks if a number is positive, negative, or zero using if-else statements.
let num=prompt("Enter a Number:");
if(num>0){
  console.log("Number is Positive");
  
if(num==0){
  console.log("Number is zero");

}
}
else{
  console.log("Number is Negative"); 
}

// Create a program that prints all even numbers from 1 to 100 using a for loop.

for(let i=1; i<=100 ; i++){
  if(i%2==0){
    console.log(i);

  }
}

// Write a function that takes a number as input and prints "Fizz" if it's divisible by 3, "Buzz" if it's divisible by 5, and "FizzBuzz" if it's divisible by both. Use if-else conditions.

let num=prompt(int("Enter a Number"));
if(num%3==0){
  console.log("Fizz");
}
else if(num%5==0){
  console.log("Buzz");
  
}
else if(num%3==0 && num%5==0){
  console.log("FizzBuzz");
}







// Write a program that uses a while loop to calculate the sum of all numbers between 1 and 50.
let sum=0;
let i=1;
while(i<=50){
  sum=i+sum;
  i++;  
}
console.log(sum); 


// Write a program that asks the user to enter their age and then uses an if-else statement to determine if the user is a minor, an adult, or a senior (age 65 or older).
let age= prompt("Enter your age:");
if(age<18){
  console.log("Minor");
  
}
else if(age=>65){
  console.log("Adult");
  
}
else if(age<65){
  console.log("Senior");
  
}

// // Create a program that uses a for loop to print the first 10 Fibonacci numbers.

// Write a program that uses an if-else statement to check whether a given year is a leap year or not.

// Write a program that uses a for loop to iterate over an array of numbers and print only the odd numbers.

// Write a program that uses a while loop to prompt the user to guess a number between 1 and 10, and keeps asking until they guess correctly.
let user=prompt("Enter a Number")
while(user>10){
  user=prompt("Enter a Number")
  
}
console.log("Guess Correct");

// Write a program that counts how many vowels are in a given string using a for loop and an if statement.















