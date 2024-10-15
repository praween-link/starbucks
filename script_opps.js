/// Object Literals----------------------------------------

let movieObjectLiterals = {
    title: "Marval",
    year: 2018,
    genre: "Action, Sci-Fi, Thriller",
    cast: ['Robert Downey Jr., Chris Evans'],
    getDetails: function () {
        console.log(`Title: ${this.title}\nYear: ${movieObjectLiterals.year}\nGenre: ${movieObjectLiterals.genre}\nCast: ${movieObjectLiterals.cast}`);
    },

    getMovieDetails: function (detail) {
        console.log(`${detail}: ${movieObjectLiterals[detail]}`);
    }
};

console.log(`Title: ${movieObjectLiterals.title}`);
movieObjectLiterals.getDetails();

movieObjectLiterals.getMovieDetails("year");

// --add
movieObjectLiterals = { ...movieObjectLiterals, test: 'Add New Info' };
console.log(movieObjectLiterals.test);

/// factory fxn---------------------------------------------
function movie(title, year) {
    const movieObj = {
        title: title,
        year: year,
        getDetails() {
            console.log(`Title: ${title}, Year: ${year}`);
        }
    }
    return movieObj;
}

const movie1 = movie("The End Game", 2018);
movie1.getDetails();

const movie2 = movie("The Garden of Galaxy", 2015);
movie2.getDetails();

/// Function Constructor------------------------------------
function Movie(title, year) {
    this.title = title;
    this.year = year;
    this.getDetails = function () {
        console.log(`Constructor---> Title: ${title}, Year: ${year}`);
    }
}
// new keyword
const m1 = new Movie("The End Game*", 2018);
m1.getDetails();
const m2 = new Movie("The Garden of Galaxy*", 2015);
m2.getDetails();


/// Prototype-----------------------------------------------
function ProtoGame(name, platform) {
    this.name = name;
    this.platform = platform;
}

const protog1 = new ProtoGame("Game _1", "GamePlat");
protog1.year = 2018;
console.log(protog1.__proto__ === ProtoGame.prototype);

const protog2 = new ProtoGame("Game _2", "GamePlat");
console.log(protog2.__proto__ === ProtoGame.prototype); // ProtoGame
console.log(protog2.__proto__.__proto__ === Object.prototype); // Object
console.log(protog2.__proto__.__proto__.__proto__);

ProtoGame.prototype.getDetails = function () {
    console.log(`Name: ${this.name}, Platform: ${this.platform}, Year: ${this.year}, Final Year: ${this.finalyear}`);
}

ProtoGame.prototype.finalyear = 2024;

protog1.getDetails();
protog2.getDetails();

const protoobj = { a: 5, b: 8 };
// protoobj.__proto__.c = 18;
// Object.__proto__.c = 18; --error
// protoobj.c = 18;
Object.prototype.c = 18; // --is the best way to add new property to the prototype chain
console.log(`[${protoobj.c}] - [Object.getPrototypeOf(protoobj) === Object.prototype]: ${Object.getPrototypeOf(protoobj) === Object.prototype}`);


const protoArray1 = new Array();
protoArray1.push(1);
protoArray1.push(2);
protoArray1.push(3);
console.log(protoArray1);
// protoArray1.__proto__.sum = function () {
//     return this.reduce((acc, n) => acc + n, 0);
// }
const protoArray2 = new Array();
Object.prototype.sum = function () {
    return this.reduce((acc, n) => acc + n, 0);
}

protoArray2.push(20);
protoArray2.push(30);
console.log(protoArray2);

console.log(protoArray1.sum());
console.log(protoArray2.sum());

/// Object.create----------------------
const carObjCr = {
    x: [],
    getDetails(name) {
        console.log(`Car (${name}) Object Create!`);
    }
}

const carobjcr1 = Object.create(carObjCr);
carobjcr1.x.push(18);
console.log(carobjcr1.__proto__); //carObjCr - getDetails
console.log(carobjcr1.__proto__.__proto__); //Object
console.log(carObjCr.x[0]);
carobjcr1.getDetails("Audi");


console.log("---------------------------------");
function updateProfile(user, updates) {
    // Implement the code here
    Object.assign(user, updates);
    return user;
}

function freezeProfile(user) {
    // Implement the code here
    Object.freeze(user);
}


const user = {
    name: "Praween",
    age: 24,
    email: "pkumar.link@gmail.com"
}
Object.prototype.showInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, `);
}
user.showInfo();

const updatedUser = updateProfile(user, { name: "Praween Kumar" });
updatedUser.showInfo();

const freezedUser = freezeProfile(updatedUser);
updatedUser.age = 90;
updatedUser.showInfo(); // Freezed obj
console.log(updatedUser.age);

/// binding with person ----------------------------------------
function bindFunc(city, country) {
    console.log(`${this.name} is from ${city}, ${country}`);
}

const person = { name: "Praween" };

bindFunc.call(person, "Bihar", "India"); // first way
bindFunc.apply(person, ["Bihar", "India"]); // secound way

/// Create new function without efacting 'this' from object------------------
const carObj = {
    model: "S",
    startEngine: function () {
        console.log(`${this.model}'s engine is started!`);
    }
}

const startCardEngine = carObj.startEngine.bind(carObj);
startCardEngine();

/// Binding Pattern (Object Destructuring)-----------------------------------------
const objDestructuring = {
    a: 1,
    b: "B",
    c: [50, 18],
    d: true
}

// const { a, b, c, d } = objDestructuring;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

const { a: aa, b: bb, c: cc, d: dd } = objDestructuring; // a as aa variable
console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);

/// Assignment Pattern --------------
let b;
({ b: b } = objDestructuring);
console.log(b);

/// Array Destructuring-----------------------------------------
const fruitsList = ["Banana", "Kiwi", "Mango", "Orange", "Lichi"];
const [bf, kf, , , lf] = fruitsList;

const [bf2, ...fsl] = fruitsList;
const [bf3, ...[, mf3, of3]] = fruitsList;

console.log(`Fruits: ${bf}, ${kf}, ${lf}`);
console.log(`Fruits: ${bf2}, ${fsl}`);
console.log(`Fruits: ${bf3}, ${mf3}, ${of3}`);
