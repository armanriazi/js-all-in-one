# JS : The Complete Developer's Guide

<p align="center">
  <img src="https://i.imgur.com/KTEorEU.png" alt="ES6 : The Complete Developer's Guide" height="250px">
</p>

# Introductory 
JavaScript is a programming language initially designed to interact with elements of web pages. Within web browsers, JavaScript consists of three main parts:

- [x] ECMAScript provides the core functionality.
- [x] The Document Object Model [(DOM)](https://www.javascripttutorial.net/javascript-dom/) provides interfaces for interacting with elements on web pages
- [x] The Browser Object Model [(BOM)](https://www.javascripttutorial.net/javascript-bom) provides the browser API for interacting with the web browser.

JavaScript can run on both web browsers and servers. A popular **JavaScript server-side environment is Node.js**. Unlike client-side JavaScript, server-side JavaScript executes on the server and allows you to access databases, file systems, etc.

To define a variable in JavaScript, you use var keyword. For example:

```javascript
var x = 10;
var y = 20;
```

ES6 added a new way to declare a variable with the let keyword:

```javascript
let x = 10;
let y = 20;
```

## Types

### Primitive Types

> `Number`, `String`, `Boolean`, `Null`, `Undefined`, and `Symbol`(es6)

### Empty Types

- [x] NaN
- [x] Infinity

### BigInt

Although, the other way around is proposed by the developers of **JSBI library**.
This library implements big numbers using its own methods. We can use them instead of native bigints.

```js
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
const bigInt = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
```

## Prototypes
In JavaScript, the prototype is a fundamental concept that underpins the language's object-oriented nature. It serves as the mechanism through which objects inherit features from one another. **Every JavaScript object has a prototype**, except for the most primitive types like `Number`, `String`, `Boolean`, `Null`, `Undefined`, and `Symbol`. These primitive types do not have a prototype because they are not objects; however, they do have a prototype when they are wrapped in object form.

### How Prototypes Work

- **Prototype Chains**: When you attempt to access a property or method on an object, *JavaScript first checks if the property exists on the object itself. If it doesn't, JavaScript looks for the property on the object's prototype.* This process continues up the prototype chain until the property is found or the end of the chain is reached **(`Object.prototype`)**. If the property is not found anywhere in the chain, `undefined` is returned.

- **Constructor Functions and Prototypes**: Constructor functions in JavaScript have a special property called `prototype`. When **you create an object using a constructor function**, *the object inherits* **the properties and methods attached** *to the constructor's `prototype`.*

### Setting and Using Prototypes

- **Using Constructors**: You can define a constructor function and attach methods to its `prototype` property. Objects created with this constructor will inherit these methods.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}.`);
};
 
const john = new Person('John');
john.sayHello(); // Outputs: Hello, my name is John.
```

- **Using `Object.create()`**: Another way to set an object's prototype is by using `Object.create()`, which takes an existing object and returns a new object with the specified object as its prototype.

```javascript
const personProto = {
  greet() {
    console.log('Hello!');
  }
};

const jim = Object.create(personProto);
jim.greet(); // Outputs: Hello!
```

### Prototypes and Inheritance

Prototypes enable a form of inheritance in JavaScript, allowing objects to share properties and methods. This is particularly useful for **creating relationships between objects**, such as having a `Car` object inherit from a `Vehicle` object, which in turn inherits from `Object.prototype`.


