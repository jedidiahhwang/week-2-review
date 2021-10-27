// FUNCTIONS

/*
    Q: Why do we use functions?
    A: Functions are reusable blocks of code.

    Data types in JS: number, string, object, array, boolean, null/undefined    

    FUNCTION DECLARATION

        function nameFunc(param1, param2) {
            ...
        }

    FUNCTION EXPRESSION

        const nameFunc = function(param1, param2) {
            ...
        }

    ARROW FUNCTION

        const nameFunc = (param1, param2) => {
            ...
        }
*/

// Let's say I want to curve the score by 5 points, then multiply it by 2 to make it out of 100
let score1 = 42;
score1 = score1 + 5;
score1 = score1 * 2;
console.log(score1);

// Great! Now do it four more times for four more scores (have fun rewriting that)
let score2, score3, score4, score5;


// This is why we use functions. We are building our function factory, but we haven't started using it yet.
function curve(score) {
    score = score + 5;
    score = score * 2;
    return score; // End function execution when the function reaches the "return" keyword.
    console.log(score); // This line of code will not run at all.
};

// Invoke or call mean the same thing, we just want to use our function.
// Now we are ready to put something through our function.

// Q: When do we want to return something?
// A: When we want a value back. If we don't store it in a variable, it gets lost and disposed of.
let result = [];
result.push(curve(score1)); // How to add returns to an array.
console.log(result);

// Ex: Write a function that takes 2 parameters and returns the sum.
// Jess Solution
function addSum (param1, param2) {
    return param1 + param2
}

// Jessie Solution
function sumNums(num1, num2) {
    return num1 + num2
}


// Ariell Solution
function addTogether (num1, num2){
    sum = num1 +num2
    return sum
}

// Ex: Write a function that takes 1 paramater that is a name, and console.log() the name within the function.
// Jess Solution
function whatever (name) {
    console.log(name);
}

// Jessie Solution
function returnName(name) {
    console.log(name)
}

// Ariell Solution
function nameFun (nameInput){
    console.log(nameInput)
}

// Ex: Write a function that takes in an array as a parameter. Print out every name in the array.
/*
    ARRAY REVIEW

    Q: What is an array?
    A: It's a list of things! Arrays store values at specific locations. Think of them like a filing cabinet.

    [4, 15, 20, "name", true, "hello there"]

    Q: How do I access values in an array?
    A: array[index]

    Q: What is a for-loop used for?
    A: Cycles through the values in an array.

    Q: What is array.length?
    A: .length is a PROPRETY. All it does is return some information. .length will always be one longer than the last index.
        .length starts at 1, index always starts at 0.
*/
// Jess Solution
function hateArrays (arr) {
    arr = []
    return arr.length
}

// Mess Solution

// Ariell Solution
function printArr (arr){
    arr.length = printArr
    return [arr.length]
}

// Solution
// Think of parameters as a temporary variable specific to your function. When we pass in values into a function, it's like the 
// parameter is now equal to your value, in this case, arr.
function hateArrays(arr = ["Jess", "Mess", "Ariell"]) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

hateArrays(["Jess", "Mess", "Ariell"]);

// CALLBACK FUNCTIONS

/*
    CALLBACK FUNCTIONS ARE NOT SPECIFIC TO ARROW FUNCTIONS. They can be all of the three types of function declarations.
    You will see CBs assciated with arrow functions a lot due to their simplicity.

    A callback function is a function within a function.
    A callback function is NOT a fancy function. It literally is a term for a function in a function.
    If it helps you remember, you can stop calling it a CB, just call it the function in a function.
*/

// Jess' function declaration from before
function addSum (param1, param2) {
    return param1 + param2
}

// Lines 149-160 are one way to write a parent/callback function relationship.
const addSum = (param1, param2) => {
    return param1 + param2;
}

const multProd = (param1, param2) => {
    return param1 * param2;
}

parentFunc(number1, number2, callbackFunc);
parentFunc(2, 5, addSum);
parentFunc(2, 5, multProd);

// Lines 164-170 is another way to write 145-149. The only difference is the function is explicitly written into the parameter
// instead of storing it into a variable called "addSum".
parentFunc(param1, param2, () => {
    return param1 + param2;
})

parentFunc(param1, param2, () => {
    return param1 * param2;
})

// app.listen() is the parent function, the arrow function is the callback. I want that exact callback to run the same way everytime.
// This is an actual example of a callback function we will use in Foundations.
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})

// HIGHER ORDER ARRAY METHODS

/*
    Q: What in the world is a higher order method/function?
    A: They accept callbacks as arguments. A higher order method/function is the parent function, it just describes the outter function.
        When I mention a higher order function/method, just picture that I'm talking about a function that takes a callback as a parameter.

    Q: What were the four higher order array methods we learned?
    A: for-each, map, filter, reduce (these all inherently have a for loop)

    Higher order array methods MUST be used with an array.
*/

// Initialize an array so we can play with it.
let numArray = [0, 1, 2, 3, 4, 5];

// for-each array method will go through each element in the array.
// To call higher order array methods, you need to attach it to an array.
// The for-each method only takes as callback function as its parameter.

// numArray.forEach(callbackFunc())
numArray.forEach(function(element, index) {
    console.log(`${element} is at index ${index}`);
});

// map array method will return a copy of the original array, but the callback function can be used to manipulate each value in the array.
// let mappedArray = numArray.map(callbackFunc())
let mappedArray = numArray.map(function(element) {
    return element += 1;
})

console.log(mappedArray);
console.log(numArray);

// filter also return a new array with values filtered out based on a boolean (true or false)
// "===", "<", ">", and any variation of those, will ALWAYS return a boolean
// let filteredArray = numArray.filter(callbackFunc())
let filteredArray = numArray.filter(function(element) {
    return element % 2 === 0;
})

console.log(filteredArray);
console.log(numArray);

// reduce "smashes everything together". The accumulator and current value will ultimately give us back one number.
// Q: What does reduce return to us?
// A: Number. It does NOT return to us an array.
// IF we do not specify a starting value, .reduce() will automatically assign the accumulator to the first value in the array.
// let reduced = numArray.reduce(callbackFunc(), startingValue) 
// startingValue is OPTIONAL. startingValue is an arbitrary value, NOT a specific value in the array.
let reduced = numArray.reduce(function(accumulator, current) {
    return accumulator + current;
}, 10)








