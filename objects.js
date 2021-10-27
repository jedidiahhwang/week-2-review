// OBJECTS

/*
    Q: Why do we use objects?
    A: Objects store key/value pairs. Think of objects as a "thing" or any sort of
    noun, and we can give this "thing" some properties with associated values.

    OBJECT STRUCTURE

    const objExample = {
        property1: value1,
        property2: value2,
        property3: value3
        ...
    }

    
    Q: How do objects differ from arrays?
    A: Several ways actually! Aside from syntax, objects differ by..

        1) They are not indexed. Arrays have indexes to keep track of where something is. Objects do not.
        2) Instead, objects use properties OR keys. They mean the same thing in this case.
        3) In order to access values in arrays, we used the format...

                array[index]

            Instead, we use dot notation or bracket notation to access values in objects...

                obj.property OR obj["property"]

            Note that when using bracket notation, you need to put the property in string format. This is because JS gives properties a string type (technically it's a symbol), but when we
            write property names in objects we don't have to put them in string format (in fact, most people don't).

        4) Think of arrays as filing cabinets that store data, while objects are literally anything in the real world you want them to be.
            - To put into grammar terms, objects are like nouns and key/value pairs are like adjectives.
            - You use adjectives OR key/value pairs to further describe your object (give it specific properties).

    Q: What datatype or properties? What about values? Are they strings? Numbers? Arrays?
    A: PROPERTIES can be thought of as strings, but when declaring properties we don't put quotes around them. Values can literally be ANYTHING you want, from numbers to arrays and even functions!
*/

// Let's make a new object. Whenever instructions ask you to make an object, this is what you should be doing.
const person = {
    name: "Jeddy",
    age: 26,
    address: "123 Fake Avenue, Salt Lake City, UT",
    isMember: true,
    cart: ["Macbook", "iPhone", "AirPods"],
    greeting: function() {
        console.log("Hello! Nice to meet you.")
    }
}

// Below, we are console.log()-ing the values associated with the property
// Note that if we don't console.log(), it will return the value only but remember we need a bucket to store that value! We need to do something with that returned value.

console.log(person.name); // Accessing the name property
console.log(person.age); // Accessing the age property
console.log(person.isMember); // Accessing the isMember property
console.log(person.cart); // Accessing the cart property
person.greeting(); // Calling the greeting function


// CLASSES

/*
    Q: What are classes?
    A: Classes are factories for making objects. They contain all the properties and functionality that related objects need. 

    CLASS STRUCTURE

    class ClassName {
        constructor(param1, param2, ...) {
            this.param1 = param1;
            this.param2 = param2;
            ...
        }

        method1() {
            ...
        }

        method2() {

        }
    }

    Q: Classes look a lot like objects, so how are they different syntactically?
    A: Classes are kind of like functions, where when we make them we aren't technically "using" them yet...

        1) Class names REQUIRE capitalization. Objects follow camel case. DO NOT capitalize your objects, capitalize your classes.
        2) Classes do not have "=" after their name, objects do. This is because you're not assigning anything when making a class, you are when you make an object though.
        3) The constructor is what makes the object when you use the class. The "this" keyword just references the object that you're working with.
        4) Methods are written just like functions.
*/

class Student {
    constructor(name, age, gpa) {
        this.name = name; // This syntax is pretty boilerplate.
        this.age = age;
        this.gpa = gpa;
        this.goodStudent = true; // This syntax shows you can initialize values in your object without requiring parameters
    }

    printName() {
        console.log(`Hello, my name is ${this.name}`);
    }

    changeGoodStudent() {
        if(this.goodStudent === true) {
            this.goodStudent = false;
        } else {
            this.goodStudent = true;
        }
    }
}