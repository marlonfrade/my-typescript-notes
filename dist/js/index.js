"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
console.log("antes", x);
x = 16;
console.log("depois", x);
let z = 16;
let y = 16;
let firstName = "Marlon";
let age = 25;
const isAdmin = true;
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(typeof myNumbers);
console.log(myNumbers.length);
myNumbers.push(4);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "Marlon",
    age: 25,
};
console.log(user);
console.log(user.name);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "1";
id = 200;
const userId = "1";
const productId = 200;
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    size: Size.P,
};
console.log(camisa);
let teste;
teste = "algumvalor";
let teste2;
teste2 = "algumvalor";
teste2 = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 13));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Marlon"));
function logger(msg) {
    console.log(msg);
}
logger("Hello World");
function greeting(name, greet) {
    console.log(`Olá, ${greet} ${name}`);
    if (greet) {
        console.log(`Olá, ${greet} ${name}`);
    }
    else {
        console.log(`Olá, ${name}`);
    }
}
greeting("Marlon");
greeting("Marlon", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
const result = sumNumbers({ n1: 1, n2: 2 });
console.log(result);
const someNumbers = {
    n1: 5,
    n2: 10,
};
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const result2 = multiplyNumbers(someNumbers);
console.log(result2);
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log(`Não foi passado nenhum número`);
}
doSomething(5);
doSomething(true);
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(item);
    });
}
const a1 = [1, 2, 3];
const a2 = ["1", "2", "3"];
showArrayItems(a1);
showArrayItems(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O role do usuário é ${this.role}`);
            return;
        }
        console.log(`informação restrita!`);
    }
}
const marlon = new User("Marlon", "admin", true);
console.log(marlon);
marlon.showUserName();
marlon.showUserRole(true);
marlon.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const mustang = new Car("Ford", 4);
mustang.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParams() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParams()
], Person);
const newUserMarlon = new Person("Marlon");
console.log(newUserMarlon);
