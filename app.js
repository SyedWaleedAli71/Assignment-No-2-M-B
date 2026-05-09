// Q No.1

// let english = 80;
// let math = 90;
// let science = 70;
// 


// let english = +prompt(`Enter Your Marks`);
// let math = +prompt(`Enter Your Marks`);
// let science = +prompt(`Enter Your Marks`);

// const totalMarks = 300;

// let obtainedMarks = english + math + science;

// let percentage = (obtainedMarks / totalMarks) * 100;

// let grade;

// if (percentage >= 80) {
//     grade = "A+";
// }
// else if (percentage >= 70) {
//     grade = "A";
// }
// else if (percentage >= 60) {
//     grade = "B";
// }
// else {
//     grade = "Fail";
// }

// document.writeln(`
//     <h2>Mark Sheet</h2>
//     English: ${english} <br>
//     Math: ${math} <br>
//     Science: ${science} <br><br>

//     Total Marks: ${totalMarks} <br>
//     Obtained Marks: ${obtainedMarks} <br>
//     Percentage: ${percentage}% <br>
//     Grade: ${grade}
// `);

// 
// Q No.2
// function myReduce(arr, callback, initialValue) {

//     var finalResult;
//     var startIndex;

//     if (initialValue !== undefined) {
//         finalResult = initialValue;
//         startIndex = 0;
//     }
//     else {
//         finalResult = arr[0];
//         startIndex = 1;
//     }

//     for (var i = startIndex; i < arr.length; i++) {
//         finalResult = callback(finalResult, arr[i]);
//     }

//     return finalResult;
// }

// var numbers = [1, 2, 3, 4];

// var sum = myReduce(numbers, function(total, current) {
//     return total + current;
// }, 0);

// console.log(sum);

// var multiply = myReduce(numbers, function(total, current) {
//     return total * current;
// }, 1);

// console.log(multiply);

// 
// Q No.3
// var arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length / 2; i++) {

//     var temp = arr[i];

//     arr[i] = arr[arr.length - 1 - i];

//     arr[arr.length - 1 - i] = temp;
// }

// console.log(arr);

// Using Array method // Q No.3 
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

// 
// Q No.4
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];

// var mergedArray = [];

// for (var i = 0; i < arr1.length; i++) {
//     mergedArray[mergedArray.length] = arr1[i];
// }

// for (var j = 0; j < arr2.length; j++) {
//     mergedArray[mergedArray.length] = arr2[j];
// }

// console.log(mergedArray);

// // Q No.5
// let sentence = "hello world";

// let words = sentence.split(" ");

// let reversed = [];

// for (let i = words.length - 1; i >= 0; i--) {
//     reversed[reversed.length] = words[i];
// }

// let result = "";

// for (let j = 0; j < reversed.length; j++) {
//     result = result + reversed[j];

//     if (j !== reversed.length - 1) {
//         result = result + " ";
//     }
// }

// console.log(result);

// Q no.6
// console.log(a);

// var a = 10;
// 
// var a;
// console.log(a);
// a = 10;
// // 
// console.log(b);

// let b = 20;
// // 
// console.log(c);

// const c = 30;
// 
// sayHello();
// function sayHello() {
//     console.log("Hello");
// }
// sayHello();

// 
// // Q No.7

// let userName = prompt(`Enter Your user Name..`);
// let userPassword = +prompt(`Enter Your password..`);
// // 
// let username = "admin";
// let password = "1234";

// function login() {
//     if (username === "admin" && password === "1234") {
//         console.log("Login Success");
//     } else {
//         console.log("Login Failed");
//     }
// }

// login();

//  Q No.8
// function generateEmail(name, type, item) {

//     if (type === "welcome") {

//         var email = `
//         Subject: Welcome to Our Platform

//         Hello ${name},

//         Welcome to our platform! We are happy to have you.

//         Regards,
//         Team
//         `;

//         console.log(email);
//     }

//     else if (type === "order") {

//         var email = `
//         Subject: Order Confirmation

//         Hello ${name},

//         Your order for "${item}" has been successfully placed.

//         Thank you for shopping with us!

//         Regards,
//         Store Team
//         `;

//         console.log(email);
//     }

//     else {

//         var email = `
//         Subject: Notification

//         Hello ${name},

//         This is a system notification.

//         Regards,
//         Team
//         `;

//         console.log(email);
//     }
// }

// generateEmail("Syed Waleed", "welcome");

// generateEmail("Ali", "order", "Laptop");

// 
// Q no.9
// var users = ["Ali", "Ahmed", "Waleed", "Zain"];

// var messages = [];

// for (var i = 0; i < users.length; i++) {

//     messages[i] = `Welcome ${users[i]} to our website!`;

// }

// console.log(messages);
