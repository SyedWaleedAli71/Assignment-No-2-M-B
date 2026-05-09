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
function myReduce(arr, callback, initialValue) {

    var accumulator;
    var startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    }
    else {
        accumulator = arr[0];
        startIndex = 1;
    }

    for (var i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator;
}

var numbers = [1, 2, 3, 4];

var sum = myReduce(numbers, function(total, current) {
    return total + current;
}, 0);

console.log(sum);

var multiply = myReduce(numbers, function(total, current) {
    return total * current;
}, 1);

console.log(multiply);