/* Function In JS */

/// Function Declaration
function sum(a, b) {
    return a + b;
}

const sum1 = sum(5, 10);
console.log(sum1);

/// Function Expression
const sum2 = function sum(a, b) {
    return a + b;
}

console.log(sum2(5, 5));

/// Arrow Function
const sum3 = (a, b) => { return a + b; }

console.log(sum3(15, 5));


// --Ex-1
const sum4 = (() => {
    x = 5;
    return () => {
        return x + 1;
    };
})()();

console.log(sum4);

// --Ex-2
const sum5 = name => `Sum  Name: ${name}`;
console.log(sum5("PK"));

// --
function func1(a, b, c) {
    console.log(arguments[0]);
    // Expected output: 1

    console.log(arguments[1]);
    // Expected output: 2

    console.log(arguments[2]);
    // Expected output: 3
}

func1(1, 2, 3);

/// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("IIFE");
})();
const user = (function () {
    let userData = {
        name: "Praween",
        age: 22,
    }
    const getName = () => userData.name;
    const getAge = () => userData.age;

    const updateAge = (age) => {
        userData.age = age;
    }

    return { getName, getAge, updateAge };
})();

console.log(`${user.getName()}, ${user.getAge()}`);
user.updateAge(24);
console.log(`${user.getName()}, ${user.getAge()}`);

function f() {
    return (function () {
        console.log("IIFE***");
    })();
}
const fans = f();

/// Pure Function -- it's completly depends on parameter and not any dependancy of external data
function calculate(num1, num2) {
    return num1 * num2;
}
console.log(calculate(5, 8));

/// Unpure Function --it's dependce on external data
const discount = 50;
function calculatePrice(price) {
    return price - discount;
}
console.log(calculatePrice(100));


/// --call back function
function callbackfun1(great) {
    console.log(`${great()}, Sneha!`);
}

function callbackHi() {
    console.log("-----------");
    const arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    let ans = [];
    const arrIndexes = [...Array(arr.length).keys()];
    for (let i = 0; i < arr.length; i++) {
        const indexes = [...Array(arrIndexes.length).keys()];
        const random = indexes[Math.floor(Math.random() * indexes.length)];
        ans.push(arr[arrIndexes[random]]);
        arrIndexes.splice(random, 1);
    }

    console.log(ans);
    return "Hi ";
}

callbackfun1(callbackHi);


/// --Higher Order Function
const inputs = [1, 2, 3, 4, 5, 6, 7, 8];
function operation(inputs, fn) {
    let output = [];
    for (let num of inputs) {
        output.push(fn(num));
    }
    return output;
}

function square(num) {
    return num * num;
}
function cube(num) {
    return num * num * num;
}

console.log(operation(inputs, square));
console.log(operation(inputs, cube));

/// --Currying in JS
function curringFn(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(curringFn(1)(2)(5));

/// --Map()
// const mapAns = inputs.map(function (num) {
//     return num * num;
// });

const mapAns = inputs.map((num, idx) => ({ id: idx, value: num * num }));

console.log(`mapAns: ${mapAns.map((obj) => `{${obj.id}, ${obj.value}}`)}`);

/// -reduce function
const reduceSum = inputs.reduce((total, num, index) => {
    // console.log(total, index);
    return total + num;
}, 0);
console.log(reduceSum);

const numbersX = [];
const sumX = numbersX.reduce((acc, num) => {
    return acc + num;
}, 5);
console.log(sumX);

/// --Filter 

const filterInput = [1, -3, 4, 9, 0, -9, -5, -10, 9, 3, 10];

// const positiveNumbers = filterInput.filter((num) => num > 0);
const positiveNumbers = filterInput.filter((num) => num > 0);
function noNegative(num) {
    return num > 0;
}

// const removeAllFalseTypeValues = filterInput.filter(Boolean); // remove falsy values (e.g., false, null, 0, "")

console.log(`Positive Numbers: ${positiveNumbers}`);


/// --find() & findIndex()-- every, fill, findLast, findLastIndex, forEach

const find1 = filterInput.find((n) => n == 9);
console.log(find1);
const find2 = filterInput.findIndex((n) => n == 9);
console.log(find2);
const find3 = filterInput.every((n) => n > -10); // every item grater then -10 return boolean
console.log(find3);

const filterInput2 = [1, 2, 3, 4, 5, 2, 4, 2];
const find4 = filterInput2.filter((ele, idx, arr) => arr.indexOf(ele) === idx);

// const sinr = filterInput2.sort((a, b) => b - a);
console.log(`find4: ${find4}`);

