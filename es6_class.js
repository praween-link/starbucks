/// --
function Vehical1(name, department, salary) {
    this.name = name;
    this.department = department;
    this.salary = salary;

    this.details = function () {
        console.log(`Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`);
    };
}
const vehical1 = new Vehical1("Praween", "Development", 150000);
console.log(vehical1);
vehical1.details();

/// --Class in JS
class Vehical2 {
    // const x = class Vehical2 {
    // const x = class {
    // properties... optional
    // name;
    department;
    salary;
    joining = 2025;
    // contructor function... optional
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    // methods
    details() {
        console.log(`Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}, Joining: ${this.joining}`);
    };
}
const vehical2 = new Vehical2("Kumar", "Software", 150000);
// const vehical2 = new x("Kumar", "Software", 150000);
console.log(vehical2);
vehical2.details();


/// Encapsulation
class EncapStu {
    name;
    id;
    #mobile;
    constructor(name, id, mobile) {
        this.name = name;
        this.id = id;
        this.#mobile = mobile;
    }

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getMobile() {
        return this.#mobile;
    }
}

const stu = new EncapStu("Praween", 144, 8507766280);
console.log(`Id: ${stu.id}, Name: ${stu.name}, Mobile: ${stu.getMobile()}`);

/// Inheritance
class Vehical {
    constructor(name, colour, wheels) {
        this.name = name;
        this.colour = colour;
        this.wheels = wheels;
    }
    getDetails() {
        console.log(`Name: ${this.name}, Colour: ${this.colour}, Wheels: ${this.wheels}`);
    }
}

class Car extends Vehical {
    constructor(colour, brand, purpose) {
        super("Car", colour, 4);
        this.brand = brand;
        this.purpose = purpose;
    }

    getDetails() {
        console.log(`Name: ${this.name}, Colour: ${this.colour}, Wheels: ${this.wheels}, Brand: ${this.brand}, Purpose: ${this.purpose}`);
    }

}

const car = new Car("Blue", "Suzuki", "Luxury Travelling");

car.getDetails();

/// --Inheritance and Constructor ---------------------------------------------------
function VehicalInC(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
}
VehicalInC.prototype.getVehDetails = function () {
    console.log(`Vehical Details- Name: ${this.name}, Colour: ${this.color}, Wheels: ${this.wheels}`);
}

function Car2(color, brand, seats) {
    VehicalInC.call(this, "car", "Red", 4);
    this.brand = brand;
    this.seats = seats;
}

Car2.prototype = Object.create(VehicalInC.prototype);

Car2.prototype.getDetails = function () {
    console.log(`Name: ${this.name}, Colour: ${this.color}, Wheels: ${this.wheels}, Brand: ${this.brand}, Seats: ${this.seats}`);
}

const car2 = new Car2("Grey", "Suzuki", "6 traveler seats");
car2.getDetails();
car2.getVehDetails();



///-------test
function main() {
    //Create your Message Class here with all the properties and methods
    class Message {
        static totalMessages = 0;
        static status = false;
        constructor(sender, receiver, messageContent) {
            this.sender = sender;
            this.receiver = receiver;
            this.messageContent = messageContent;
        }

        static recordMessage() {
            Message.totalMessages++;
        }
        static changeStatus(status) {
            Message.status = status;
        }

        sendMessage() {
            console.log(`The message ${this.messageContent} has been sent from ${this.sender} to ${this.receiver}`);
            Message.recordMessage();
        }

        displayDetails() {
            console.log(`sender: ${this.sender}, Receiver: ${this.receiver}, message content: ${this.messageContent}, Status: ${Message.status}, and total message: ${Message.totalMessages}`);
        }
    }

    Message.changeStatus();
    const myMessage = new Message("John", "Jane", "Hello");
    myMessage.sendMessage();
    myMessage.displayDetails();


    return Message;
}
main();