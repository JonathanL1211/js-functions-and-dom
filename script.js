// Exercise 1: Flattening Arrays
// Write a function to flatten an array by 1 level, i.e. given an array, your function should return an array whose elements are those of the given array and its subarrays, but ignore any subarrays of subarrays. See below for the example, and complete the flatten() function.
var testArray = [1, [2, 3], [4, [5], 6]];
var flatten = function(arr){
        // arr = arr.reduce(function(a, b){
        // return a.concat(b);
        // },[]);
        // return arr;

}


//     var emptyArray = [];
//     var emptyArray2 = [];

// //or do arr[i].constructor === Array

//     for (var i = 0; i < arr.length; i++){
//         emptyArray.push(arr[i]);
//         //console.log(emptyArray);
//         for (var j = 0; j < emptyArray[i].length; j++){
//             emptyArray2.push(emptyArray[i][j]);
//         }

//         // if (Array.isArray(arr[i]) === true){

//         // }
//     }
//     return emptyArray2;


//     //console.log(testArray.concat(emptyArray));
var result = flatten(test);
console.log(result); // Should print out [1, 2, 3, 4, [5], 6];

// Bonus: Flatten the array really hard. No matter how many sub-arrays it has, your function should return an array with no sub-arrays. E.g. flattenDeep(testArray) should return [1, 2, 3, 4, 5, 6].
// Hint: You will have to find a way to test whether an array has any sub-arrays or not. If it does, your flatten function above should be useful.


// Exercise 2: Debugging
// You'd expect the function below to greet Alan. Why doesn't it? Explain and debug.
// var person1 = {name: "Alan"};
// var person2 = {name: "Amy"};
// var greet = function(person) {
//     if (person == {name: "Alan"}) {
//         console.log("Hello, Alan!");
//     } else {
//         console.log("Hi, Amy!");
//     };
// };
// greet(person1);

// var person1 = {name: "Alan"};
// var person2 = {name: "Amy"};
// var greet = function(person) {
//     if (person.name === "Alan") {
//         console.log("Hello, Alan!");
//     } else {
//         console.log("Hi, Amy!");
//     };
// };
// greet(person1);

// Explanation: You cant compare arrays and objects! Because they are containers, hence even if their content is the same, they are not equal
// Write your correct code below.


// DOM Manipulation Exercises: Write your code below for the next section.

