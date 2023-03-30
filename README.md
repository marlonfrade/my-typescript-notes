## 👋 Fala Dev,

> A seguir teremos anotações sobre typescript, o curso irá abordar os principais conceitos e projetos na prática.

## O que é o Typescript?

- Typescript é um superset para a linguagem JavaScript
- Ou seja, adiciona funções ao JavaScript, como a declaração de tipos de variável.
- Pode ser utilizado no desenvolvimento de projetos com NodeJS e express para criação de APIS, e bibliotecas como React.
- Precisa ser compilado pra JavaScript, pois não executamos TS;
- Desenvolvido e mantido pela Microsoft

#### Exemplo

```typescript
let x: number = 10;
console.log("antes", x);

x = 16;
console.log("depois", x);
```

## Inferencia X Annotation

Ao trabalhar com projetos em typescript, será necessário estar familiarizado com qual caminho de tipagem seu código irá seguir.

```typescript
//Inferencia X Annotation

let z = 16;
// z="teste" -- erro

let y: number = 16;
```

Ou seja, podemos perceber que na inferência o Typescript entende a qual tipo a variável está sendo atribuída.

Porém cabe ressaltar que nem sempre a inferência vai funcionar, dado os contextos de cada situação, sendo necessário a recorrência da tipagem conforme segundo exemplo.

## Analisando Tipagem Básica

```typescript
let firstName: string = "Marlon";

let age: number = 25;

const isAdmin: boolean = true;

console.log(typeof firstName);

age = 26;

console.log(age);
```

`String !== string` - Em javascript nós temos os objetos que são em letra maiúscula, e as variáveis em letras minúsculas, porém em Typescript sempre iremos trabalhar com as letras minúsculas

> Lembrando que o console do teu tipo deve ser o tipo que será utilizado para declarar o tipo da variável.

## Analisando a Tipagem de Objetos

#### Array

Para trabalhar com listas e arrays, devemos utilizar a seguinte sintaxe:

```typescript
const myNumbers: number[] = [1, 2, 3];

//declaramos o array como sendo um array de numbers
//sendo assim já podemos utilizar as propriedades do array como:

console.log(myNumbers);

console.log(typeof myNumbers);

console.log(myNumbers.length);

myNumbers.push(4);

console.log(myNumbers);
```

#### Tuple

No python, as tuplas são arrays cujos valores inseridos não podem ser modficados, no typescript, as tuplas terão suas tipagens declaradas dentro do array, como no exemplo abaixo:

```typescript
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true] -- erro
```

#### Object Literals

Ao declarar objetos, uma chaves irá receber a tipagem dos dados, enquanto que a segunda chaves irá receber os dados de informação, por exemplo:

```typescript
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
```

## Analisando Tipagem Múltipla

#### Any

O any foi feito pra aceitar qualquer tipo, indo contra a "filosofia" do typescript, mas também para definirmos uma variável que pode receber qualquer tipo de valor.

```typescript
let a: any = 0;

a = "teste";
a = true;
a = [];
```

> Lembrando que o any não deve ser utilizado em qualquer circunstância, mas sim dentro de um contexto específico onde não se pode prever o tipo do valor retornado ou declarado. Utilizá-lo fora desse contexto pode ser considerado uma má prática.

#### Union Type

Uma das formas de se unir tipos para criar um outro tipo mais complexo, pode ser chamado de union type. Essa seria uma maneira mais ==typescript== de se resolver os problemas de utilização de `any` fora de contexto, ou seja, não sabemos se os dados serão retornados em `string` ou `number`, aí ao invés de se utilizar o `any` podemos aderir ao union type, como no caso do id que dependendo do formato do projeto pode ser retornado como `string`
ou `number`.

```typescript
let id: string | number = "1";

id = 200;
// id = true -- erro
```

#### Type Alias

Uma maneira eficiente de se criar código limpo e reutilizável é usando o type alias, como uma solução para o caso de decidir adicionar mais um tipo a variável ID do exemplo anterior, não sendo necessário deixar o código extenso, podemos adicionar um alias e reduzir a tipagem:

```typescript
type myIdType = number | string;

const userId: myIdType = "1";
const productId: myIdType = 200;
const shirId: myIdType = 123;
// id = true -- erro
```

#### Enum

Um tipo de dado que enumera uma coleção para trabalharmos dados mais complexos de uma maneira mais simples, por exemplo:

```typescript
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
```

## Analisando Tipagem Literal

Podemos aplicar valores literais para um tipo, sendo assim impossível que esse valor seja alterado posteriormente.

```typescript
let teste: "algumvalor";
// teste = "outrovalor" -- erro

teste = "algumvalor";
```

> Geralmente para poder resetar o valor aplicado a sua variável devemos usar o union type para declarar que a variável pode ser null, por exemplo

```typescript
let teste2: "algumvalor" | null;

teste2 = "algumvalor";
teste2 = null;
```

## Analisando Funções

#### Função Básica

Para se criar uma função no typescript, devemos usar a mesma semântica do javascript, porém todos os argumentos passados para a função devem ser tipados:

```typescript
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(12, 13));
// console.log(sum("12", true)); -- erro
```

#### Tipagem do Retorno

Além de informar o tipo do parâmetro que estamos declarando, caso uma função tenha retorno, podemos declarar como no primeiro exemplo, e quando a função não possui retorno utilizamos a declaração do void para fazer a tipagem do retorno da função.

```typescript
// Estamos informando que o retorno da função
// deve ser uma string
function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHelloTo("Marlon"));

// Quando a função não retornar nada como no
// exemplo abaixo podemos usar o void
function logger(msg: string): void {
  console.log(msg);
}

logger("Hello World");
```

#### Parâmetros opcionais

Caso algum dos parâmetros da função sejam opcionais como no exemplo abaixo, podemos utilizar o ==?== e fazer as devidas tratativas de condicionais.

```typescript
function greeting(name: string, greet?: string): void {
  console.log(`Olá, ${greet} ${name}`);
  if (greet) {
    console.log(`Olá, ${greet} ${name}`);
  } else {
    console.log(`Olá, ${name}`);
  }
}

greeting("Marlon");
greeting("Marlon", "Sir");
```

> Ao usar o "?", colocamos o greet como opcional, não sendo obrigatório o parâmetro. Porém perceba que há um erro de lógica acima, onde o log do greet virá como undefined, o typescript não aponta esse erro pois colocamos o parâmetro como opcional, sendo responsabilidade do desenvolvedor tratar essa obrigatoriedade, como no exemplo acima.

## Interfaces

As interfaces são um recurso do typescript que veio para o javascript, que padronizam algo para que possamos reutilizar como um tipo.

```typescript
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
```

## Narrowing

Quando não sabemos qual tipo exato será o parâmetro de uma função, mas precisamos fazer uma tratativa com esses resultados, podemos usar o narrowing do typeof para tratar as condicionais:

```typescript
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  }
  console.log(`Não foi passado nenhum número`);
}

doSomething(5);
doSomething(true);
```

Ao verificar o typeof de um parâmetro, estamos usando um narrowing de typeof para garantir que o retorno será de acordo com o parâmetro passado.

## Generics

Um outro recurso do typescript é o generics, que para se evitar um any, pode ser aplicado em diferentes situações que possuem a necessidade de se declarar um tipo genérico, que pode receber mais de um tipo de valor não esperado, como uma função que mostra os itens de um array, porém não sabemos se os itens virão como number, string, ao invés do any podemos utilizar o generics para declarar um tipo genérico seguindo a seguinte linha de desenvolvimento

```typescript
function showArrayItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}

const a1 = [1, 2, 3];
const a2 = ["1", "2", "3"];

showArrayItems(a1);
showArrayItems(a2);
```

> Usamos a tag <> após o nome da função para remeter a algo genérico, como por exemplo T e U (que são mais utilizados no typescript). No caso acima utilizamos a tag T referenciando dentro do parâmetro para exemplificar que esperamos receber qualquer tipo de dado nesse array, porém sendo mais especificado que um simples any.

## Classes

Class é um método de orientação a objeto utilizado para definir novas classes como no exemplo abaixo:

```typescript
class User {
  name;
  role;
  isApproved;
  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }
}

const marlon = new User("Marlon", "admin", true);
console.log(marlon);
```

> Na utilização de classes, precisamos usar um constructor pois o typescript solicita numa class a tipagem dos dados e um inicializador, portanto sendo mais sucinto declarar os tipos num constructor e utilizar a tipagem por inferência, ou seja, declarar no constructor os tipos e atribuir aos valores do objeto.

Podemos também utilizar os constructor para criar métodos, como por exemplo:

```typescript
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
}

const marlon = new User("Marlon", "admin", true);
marlon.showUserName();
```

Um outro exemplo utilizando parâmetros:

```typescript
class User {
  name;
  role;
  isApproved;
  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }
  showUserRole(canShow: boolean) {
    if (canShow) {
      console.log(`O role do usuário é ${this.role}`);
      return;
    }
    console.log(`informação restrita!`);
  }
}

const marlon = new User("Marlon", "admin", true);
console.log(marlon);

marlon.showUserRole(true);
marlon.showUserRole(false);
```

## Interfaces em classes

Interfaces é o core da orientação a objetos, geralmente sendo utilizada para ditar como uma classe irá se comportar. Sendo muito útil em projetos onde há classes que são muito parecidas, ou seja, tendo um padrão entre elas. Um exemplo de uma interface de veículos:

```typescript
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
```

> Para criar interfaces, utiliza-se a letra "I" no início do nome para especificar que será uma interface. No exemplo acima, a interface "IVehicle" é utilizada na class "Car" através do comando "implements".

## Herança

Uma class também pode herdar outra class, como por exemplo, criando uma nova class Super Car que herda os tipos da class no exemplo anterior Car:

```typescript
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
```

> No exemplo acima utilizamos uma nova class que possui sua herança da class Car, porém nessa nova class adicionamos a nova chave "engine". Para se utilizar o constructor dentro da class herdada, devemos passar os tipos que declaramos no constructor "pai" e o novo declarado no constructor filho, e para atribuir os valores, utilizamos o "super" para extrair esses valores da class "pai".

## Decorators

Os decorators são um recurso do typescript muito utilizados para validação de dados, para construir um evento observável em alguma class ou função. Um recurso complexo para quem é iniciante no typescript. Porém caso deseje utilizar, lembre-se de habilitar o mesmo dentro do seu arquivo de configuração, através da chave `experimentalDecorators`.

```typescript
class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
```

Temos a class Person que recebe a variável name quando o usuário é criado, porém se quiser adicionar um id e uma data de criação para esse usuário, podemos utilizar um constructor, uma vez que não é o usuário que preenche essas informações, ambas devem ser geradas pelo sistema.

> Constructor são funções que retornam outras funções que contenham as informações que queremos alterar na class base.

```typescript
function BaseParams() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}

//Chamando o constructor
@BaseParams()
class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const newUserMarlon = new Person("Marlon");
console.log(newUserMarlon);
```

> A função baseParams basicamente cria os parâmetros base para a criação de qualquer outra class, nesse caso contendo um id e uma data de criação.

> Para trabalhar com construtores, devemos esperar qualquer tipo de argumento, pois como serão parâmetros base para as classes, teremos provavelmente classes diferentes umas das outras, portanto adotar uma abordagem mais genérica, tentando sempre evitar o any. Para isso utilizaremos a tag genérica.

> Para utilizar um constructor devemos usar o "@" para exemplificar que estamos utilizando um constructor dentro do código.

# Anotações do Projeto

## Configurando o Projeto

Verificar se o typescript está instalado na máquina:

```bash
npx tsc -v
```

Ou usando yarn:

```shell
yarn tsc -v
```

Caso não tenha o typescript instalado na sua máquina, verifique a [documentação](https://www.typescriptlang.org/download) para poder instalar de acordo com seu gerenciador de pacotes preferido.

Assim que tiver o arquivo instalado na máquina, pode prosseguir com o seguinte comando para iniciar um arquivo de configuração:

> Certifique-se de já estar dentro do seu diretório

```bash
npx tsc --init
```

Arquivo de configuração criado, pode-se alterar esse arquivo `tsconfig.json` da seguinte maneira:

`rootDir` - Diretório root, deve ser alterado para onde ficará armazenado o index.ts da sua aplicação (No caso do projeto a pasta src);

`outDir` - Diretório de saída, deve ser apontado o diretório que será compilado o arquivo javascript, nesse caso dentro da pasta dist na pasta js

> Para validar, crie seu "Hello World" no arquivo `index.ts` e para compilar rode no seu terminal o comando `npx tsc`, e certifique-se se a leitura do arquivo de entrada e saída estão de acordo.

`target` - O target define a linguagem javascript que será compilada, portanto certifique-se de utilizar a versão que mais se adapta ao seu projeto.

Ao final, sua estrutura deve ficar parecido com algo tipo isso:

```json
├── dist (or build)
│   ├── js
│   │   ├── index.js
│   ├── index.html
├── src
│   ├── index.ts
└── tsconfig.json
```

## Compilando o Projeto

Para que o arquivo index.js seja observado pelo typescript para que qualquer alteração seja alterado novamente, podemos usar o comando:

```bash
npx tsc -w
```

> Se você utiliza o VScode como IDE, pode-se usar a extensão live-server para abrir um servidor para servir sua aplicação estática, e tendo acesso ao console poderá ver o javascript que está sendo gerado pelo typescript.
