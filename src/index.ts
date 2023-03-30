// -------------------
// Exemplo de Tipagem
// -------------------

let x: number = 10;
console.log("antes", x);

x = 16;
console.log("depois", x);

// -----------------------
// Inferencia X Annotation
// -----------------------

let z = 16;
// z="teste" -- erro

let y: number = 16;

// -----
// Basic
// -----

let firstName: string = "Marlon";
let age: number = 25;
const isAdmin: boolean = true;

// String !== string
// Em javascript nós temos os objetos que são em letra maiúscula, e as variáveis em letras minúsculas.
// Porém em Typescript sempre iremos trabalhar com as letras minúsculas
console.log(typeof firstName);
//lembrando que o console do teu tipo deve ser o tipo que será utilizado para declarar o tipo da variável.
firstName = "João";
console.log(firstName);

// ------
// Objects
// ------

//array
//Para trabalhar com listas e arrays, devemos utilizar a seguinte sintaxe:
const myNumbers: number[] = [1, 2, 3];
//declaramos o array como sendo um array de numbers
//sendo assim já podemos utilizar as propriedades do array como:
console.log(myNumbers);
console.log(typeof myNumbers);
console.log(myNumbers.length);
myNumbers.push(4);
console.log(myNumbers);

// tuple
// No python, as tuplas são arrays cujos valores inseridos não podem ser modficados,
// no typescript, as tuplas terão suas tipagens declaradas dentro do array, como no exemplo abaixo:
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true] -- erro

//object literals -> {prop: value}
const user: {
  name: string;
  age: number;
} = {
  name: "Marlon",
  age: 25,
};

console.log(user);
console.log(user.name);
// user.job = "programador" -- erro

// ------
// any
// ------

let a: any = 0;

a = "teste";
a = true;
a = [];

// ----------
// union type
// ----------

let id: string | number = "1";

id = 200;
// id = true -- erro

// ----------
// type alias
// ----------

type myIdType = number | string;

const userId: myIdType = "1";
const productId: myIdType = 200;
const shirId: myIdType = 123;
// id = true -- erro

// ----------
// enum
// ----------
// exemplo: tamanho de roupas (size: Médio, size: Pequeno)

enum Size {
  P = "pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  name: "Camisa Gola V",
  size: Size.P,
};

console.log(camisa);

// ----------
// literal types
// ----------

let teste: "algumvalor";

// teste = "outrovalor" -- erro

teste = "algumvalor";

// ----------
// literal types com union type
// ----------

let teste2: "algumvalor" | null;
// a variável inicia com um valor, podemos o mesmo ser resetado de volta pra null
// teste = "outrovalor" -- erro
teste2 = "algumvalor";
teste2 = null;

// ----------
// functions
// ----------

function sum(a: number, b: number) {
  return a + b;
}
// Função Básica tipada

console.log(sum(12, 13));
// console.log(sum("12", true)); -- erro

//outro exemplo
function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}
// Estamos informando que o retorno da função deve ser uma string

console.log(sayHelloTo("Marlon"));

// outro exemplo
function logger(msg: string): void {
  console.log(msg);
}
// Quando a função não retornar nada como no exemplo acima podemos usar o void

logger("Hello World");

function greeting(name: string, greet?: string): void {
  // Ao usar o "?", colocamos o greet como opcional, não sendo obrigatório o parâmetro
  console.log(`Olá, ${greet} ${name}`);
  // Porém perceba que há um erro de lógica acima, onde o log do greet virá como undefined
  // O typescript não aponta esse erro pois colocamos o parâmetro como opcional,
  // sendo responsabilidade do desenvolvedor tratar essa obrigatoriedade, por exemplo:
  if (greet) {
    console.log(`Olá, ${greet} ${name}`);
  } else {
    console.log(`Olá, ${name}`);
  }
}

greeting("Marlon");
greeting("Marlon", "Sir");

// ----------
// interfaces
// ----------

interface MathFunctionsParams {
  n1: number;
  n2: number;
}
// perceba que são dois parâmetros para uma função matemática, porém usando interface(objeto) e enum

function sumNumbers(nums: MathFunctionsParams) {
  return nums.n1 + nums.n2;
}

const result: number = sumNumbers({ n1: 1, n2: 2 });
console.log(result);

// utilizando de outras formas
const someNumbers: MathFunctionsParams = {
  n1: 5,
  n2: 10,
};

function multiplyNumbers(nums: MathFunctionsParams) {
  return nums.n1 * nums.n2;
}

const result2: number = multiplyNumbers(someNumbers);
console.log(result2);

// ----------
// narrowing (checagem de tipos)
// ----------

function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  }
  console.log(`Não foi passado nenhum número`);
}

doSomething(5);
doSomething(true);

// ----------
// Generics
// ----------

// Usamos a tag <> após o nome da função para remeter a algo genérico, como por exemplo T e U (que são mais utilizados no typescript)
// No exemplo abaixo iremos utilizar a tag <T> para exemplificar a função genérica
// function showArrayItems<T>(arr: T[]) {}
// no caso acima utilizamos a tag T referenciando dentro do parâmetro para exemplificar que esperamos receber
// qualquer tipo de dado nesse array, porém sendo mais especificado que um simples any

function showArrayItems<T>(arr: T[]) {
  // Ao declarar um genérico, temos acesso as propriedades do array
  arr.forEach((item) => {
    console.log(item);
  });
}

const a1 = [1, 2, 3];
const a2 = ["1", "2", "3"];

showArrayItems(a1);
showArrayItems(a2);

// ----------
// Classes
// ----------

class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }

  showUserName() {
    console.log(`O nome do usuário é ${this.name}`);
  }

  showUserRole(canShow: boolean): void {
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

// Na utilização de classes, precisamos usar um constructor pois o typescript solicita numa class
// a tipagem dos dados e um inicializador, portanto sendo mais sucinto declarar os tipos num constructor
// e utilizar a tipagem por inferência, ou seja, declarar no constructor os tipos e atribuir aos valores do objeto.

// ----------------------
// Interfaces em Classes
// ----------------------

interface IVehicle {
  brand: string;
  showBrand(): void;
}

class Car implements IVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do carro é ${this.brand}`);
  }
}

const mustang = new Car("Ford", 4);
mustang.showBrand();

// ----------------------
// Herança
// ----------------------

class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

// criando uma nova class supercar com herança

const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();

// ----------------------
// Decorators
// ----------------------

// Todo decorator é uma função que retorna outra função, na situação abaixo utilizaremos o constructor para gerar um id
// e uma data de criação automaticamente para a class de usuário que será gerada a partir da criação de um novo usuário
function BaseParams() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}

@BaseParams()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const newUserMarlon = new Person("Marlon");
console.log(newUserMarlon);
