// Functions 
function greet(){
    console.log('Hello, WinDev')
}

// greet()

// 2. function Declaration 

function sayGoodBye(){
    console.log('Good bye')
}

// 3. Function Parameters and Arguments 

// function with parameters 
function greetPerson(name){
    console.log("hello, " + name + "!")
}

//function with an argument
// greetPerson('Windev')

// Why it is useful 

// function addNumbers(a, b){
//     console.log(a + b)
// }

// addNumbers(5, 3)
// addNumbers(20, 3)
// addNumbers(29, 3)


// 4. Return Statements 
function multiply(a, b){
    return a * b
}

// let result = multiply(4, 5)

// // console.log(result)
// console.log(multiply(4, 5))

// 5. Functions Expressions and Arrow FUnctions 
let sayHi = function(){
    console.log("Hi There")
}

// sayHi() 

// Arrow FUnctions (ES6) 
let add = (a, b) => a + b
// console.log(add(2, 1))

// 6. Hands-on Coding Exercise 

function calculator(num1, num2, operation){
    if(operation === "add"){
        return num1 + num2
    } else if (operation === "subtract"){
        return num1 - num2
    } else if (operation === "multiply"){
        return num1 * num2
    } else if (operation === "divide"){
        return num1 / num2
    } else {
        return "invalid operation"
    }
}

// 1. Introduction to control flow 

// Control flow execute code in order. And make the program more dynamic 

// 2. Conditional Statements: if, else if, and else 

// if(conditon){
//     // some should run here if true
// } else if(anotherConditon){
//     // run something else if true here 
// } else {
//     // run this if none of the conditons met 
// }

// let age = 20

// if(age >= 18){
//     console.log('You are an adult')
// } else {
//     console.log('You are a minor')
// }

// let score = 81

// if(score >= 90){
//     console.log("Grade: A")
// } else if(score >= 80){
//     console.log("Grade: B")
// } else if(score >= 70){
//     console.log("Grade: C")
// } else {
//     console.log("Grade: F")
// }

// 3. Switch statements 
// let day = 1
// let dayName;

// switch(day){
//     case 0:
//         dayName = "Sunday"
//         break;
//     case 1: 
//         dayName = "Monday"
//         break;
//     default:
//         dayName = "Invalid day"
// }

// console.log(dayName)

// 4. Loops: for, while, and do-while 

// for (let i = 0; i < 5; i++){
//     console.log("number: ", i)
// }

// let count = 0

// while (count < 3){
//     console.log('Count: ', count)
//     count++
// }

// let number = 5

// do {
//     console.log("number:", number)
//     number--
// } while (number > 3)

// Coding hands-on exercise 

// function checkOddEven(num){
//     if(num % 2 === 0){
//         return "even"
//     } else {
//         return "odd"
//     }
// }

// console.log(checkOddEven(222))

// let fruits = ["apple", "Banana", "Cherry"]

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// let password = ""

// while(password !== "javascript"){
//     password = prompt("Enter the password")
// }

// console.log("Access granted!")


// Coding Exercise for Control Flow lesson 4
// do the exercise below for lesson #4



// Exercise 1: Odd or Even Checker
// Write a function called isOddOrEven that takes an integer as an argument and prints whether the number is "Odd" or "Even."

// Example:
// isOddOrEven(4); // Output: "Even"
// isOddOrEven(7); // Output: "Odd"
// Use the modulo operator % to check if the number is divisible by 2.

// Exercise 2: Simple Grading System
// Write a function named gradeCalculator that takes a score (from 0 to 100) as an argument and prints a grade based on the following:

// 90 and above: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Below 60: "F"
// Example:
// gradeCalculator(85); // Output: "B"
// gradeCalculator(72); // Output: "C"
// Use if...else if...else to handle each grade range.


// Exercise 3: Day of the Week
// Write a function dayOfWeek that takes a number (0–6) as input and returns the name of the corresponding day of the week. Use a switch statement to implement this. Here is the mapping:

// 0: Sunday
// 1: Monday
// 2: Tuesday
// 3: Wednesday
// 4: Thursday
// 5: Friday
// 6: Saturday
// Example:
// dayOfWeek(2); // Output: "Tuesday"
// dayOfWeek(5); // Output: "Friday"
// Make sure to use break statements after each case.



// Exercise 4: Multiplication Table
// Write a function called multiplicationTable that takes a number n as input and prints the multiplication table of n (up to n * 10).

// Example:
// multiplicationTable(3);
/* Output:
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
...
3 * 10 = 30
*/
// Use a for loop to repeat the multiplication for numbers 1 through 10.



// Exercise 5: Sum of Numbers in an Array
// Write a function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array.

// Example:
// sumArray([1, 2, 3, 4, 5]); // Output: 15
// sumArray([10, -2, 7]);     // Output: 15
// Use a for loop or a while loop to iterate through each element in the array and add it to a sum variable.


// lesson 5: arrays



// Exercise 1: Manipulating an Array
// console.log("Exercise 1: Manipulating an Array");
// const shoppingList = ["milk", "bread", "eggs", "butter"];
// Solution Example:
// shoppingList.push("cheese"); // Add "cheese" to the end of the array
// shoppingList.shift(); // Remove the first item from the array
// const eggIndex = shoppingList.indexOf("eggs");
// if (eggIndex !== -1) {
//   shoppingList[eggIndex] = "almond milk"; // Replace "eggs" with "almond milk"
// }
// console.log("Updated shopping list (example):", shoppingList);

// Practice:
// const books = ["fiction", "mystery", "thriller", "science"];
// 1. Add "romance" to the array.
// 2. Remove the last item.
// 3. Replace "thriller" with "biography".
// Print the final array after changes.

// Exercise 2: Array Iteration
// console.log("\nExercise 2: Array Iteration");
// const numbers = [10, 15, 20, 25, 30];
// Solution Example:
// numbers.forEach((number) => console.log("Doubled:", number * 2)); // Multiply by 2

// Practice:
// const ages = [12, 18, 25, 30, 45];
// 1. Use a loop to print each age incremented by 1.
// 2. Use forEach to print whether each age is even or odd.

// Exercise 3: Working with Array Methods
// console.log("\nExercise 3: Working with Array Methods");
// const scores = [45, 67, 89, 34, 100, 76, 92];
// Solution Example:
// const highScores = scores.filter(score => score > 70); // Filter scores above 70
// console.log("Scores above 70 (example):", highScores);
// const boostedScores = scores.map(score => score + 10); // Boost each score by 10
// console.log("Boosted scores (example):", boostedScores);
// const totalScore = scores.reduce((sum, score) => sum + score, 0); // Sum of scores
// console.log("Total score (example):", totalScore);

// Practice:
// const temperatures = [32, 45, 28, 40, 50];
// 1. Use `filter()` to get temperatures above 35.
// 2. Use `map()` to convert all temperatures to Fahrenheit (Celsius * 9/5 + 32).
// 3. Use `reduce()` to find the total sum of all temperatures.

// Exercise 4: Sorting and Reversing
// console.log("\nExercise 4: Sorting and Reversing");
// const names = ["John", "Alice", "Bob", "Eve", "Chris"];
// Solution Example:
// names.sort(); // Sort alphabetically
// console.log("Sorted names (example):", names);
// names.reverse(); // Reverse the array
// console.log("Reversed names (example):", names);
// names.push("Zara"); // Add Zara and re-sort
// names.sort();
// console.log("Final sorted names (example):", names);

// Practice:
// const cities = ["Paris", "London", "Tokyo", "New York"];
// 1. Sort the array alphabetically.
// 2. Reverse the array.
// 3. Add "Sydney" to the array and re-sort it.

// Exercise 5: Nested Arrays
// console.log("\nExercise 5: Nested Arrays");
// const matrix = [
//   ["X", "O", "X"],
//   ["O", "X", "O"],
//   ["X", " ", "O"]
// ];
// Solution Example:
// matrix.forEach(row => console.log(row.join(" "))); // Print each row

// function getRow(matrix, rowIndex) {
//   return matrix[rowIndex];
// }
// console.log("Row 1 (example):", getRow(matrix, 1));

// function getColumn(matrix, colIndex) {
//   return matrix.map(row => row[colIndex]);
// }
// console.log("Column 2 (example):", getColumn(matrix, 2));

// Practice:
// const grid = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// 1. Write a function to return the diagonal from top-left to bottom-right.
// 2. Write a function to return all even numbers from the grid.



// Lesson #6 objects 

