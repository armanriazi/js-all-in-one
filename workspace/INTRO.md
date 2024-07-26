# JS : The Complete Developer's Guide

<p align="center">
  <img src="https://i.imgur.com/KTEorEU.png" alt="ES6 : The Complete Developer's Guide" height="250px">
</p>

## Contents

- [Introductory](#Introductory)
- [Types](#Types)
- [Equality](#Equality)
- [Function](#Function)
- [Closure](#Closure)
- [This](#This)
- [Prototype](#Prototypes)
- [References](#References)
- [Recap](#Recap)

## Introductory 
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

### Number
Whenever you are handling numbers in any programming language you need to be aware of the idiosyncrasies of how the language handles numbers. Here are a few critical pieces of information about numbers in JavaScript that you should be aware of.

### Core Type
JavaScript has only one number type. It is a double-precision 64-bit `Number`. Below we discuss its limitations along with a recommended solution.

### Decimal
For those familiar with doubles / float in other languages, you would know that binary floating point numbers *do not* map correctly to Decimal numbers. A trivial (and famous) example with JavaScript's built in numbers is shown below:

```js
console.log(.1 + .2); // 0.30000000000000004
```

> For true decimal math use `big.js` mentioned below.

### Integer
The integer limits represented by the built in number type are `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER`.

[[MAX_SAFE_INTEGER]]

```js
console.log({max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER});
// {max: 9007199254740991, min: -9007199254740991}
```

**Safe** in this context refers to the fact that the value *cannot be the result of a rounding error*.

The unsafe values are `+1 / -1` away from these safe values and any amount of addition / subtraction will *round* the result.

```js
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true!
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true!

console.log(Number.MAX_SAFE_INTEGER);      // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1);  // 9007199254740992 - Correct
console.log(Number.MAX_SAFE_INTEGER + 2);  // 9007199254740992 - Rounded!
console.log(Number.MAX_SAFE_INTEGER + 3);  // 9007199254740994 - Rounded - correct by luck
console.log(Number.MAX_SAFE_INTEGER + 4);  // 9007199254740996 - Rounded!
```

To check safety you can use ES6 `Number.isSafeInteger`:

```js
// Safe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true

// Unsafe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

// Because it might have been rounded to it due to overflow
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10)); // false
```

> JavaScript will eventually get [BigInt](https://developers.google.com/web/updates/2018/05/bigint) support. For now, if you want arbitrary precision integer math use `big.js` mentioned below.

### big.js
Whenever you use math for financial calculations (e.g. GST calculation, money with cents, addition etc) use a library like [big.js](https://github.com/MikeMcl/big.js/) which is designed for
* Perfect decimal math
* Safe out of bound integer values

Installation is simple:
```bash
npm install big.js @types/big.js
```

Quick Usage example:

```js
import { Big } from 'big.js';

export const foo = new Big('111.11111111111111111111');
export const bar = foo.plus(new Big('0.00000000000000000001'));

// To get a number:
const x: number = Number(bar.toString()); // Loses the precision
```

> Do not use this library for math used for UI / performance intensive purposes e.g charts, canvas drawing etc.

### NaN
When some number calculation is not representable by a valid number, JavaScript returns a special `NaN` value. A  classic example is imaginary numbers:

```js
console.log(Math.sqrt(-1)); // NaN
```

Note: Equality checks **don't** work on `NaN` values. Use `Number.isNaN` instead:

```js
// Don't do this
console.log(NaN === NaN); // false!!

// Do this
console.log(Number.isNaN(NaN)); // true
```

### Infinity
The outer bounds of values representable in Number are available as static `Number.MAX_VALUE` and `-Number.MAX_VALUE` values.

```js
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
console.log(-Number.MAX_VALUE); // -1.7976931348623157e+308
```

Values outside the range where precision isn't changed are clamped to these limits e.g.

```js
console.log(Number.MAX_VALUE + 1 == Number.MAX_VALUE);   // true!
console.log(-Number.MAX_VALUE - 1 == -Number.MAX_VALUE); // true!
```

Values outside the range where precision is changed resolve to special values `Infinity`/`-Infinity` e.g.

```js
console.log(Number.MAX_VALUE + 1e292);  // Infinity
console.log(-Number.MAX_VALUE - 1e292); // -Infinity
```

Of-course, these special infinity values also show up with arithmetic that requires it e.g.

```js
console.log( 1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
```

You can use these `Infinity` values manually or using static members of the `Number` class as shown below:

```js
console.log(Number.POSITIVE_INFINITY === Infinity);  // true
console.log(Number.NEGATIVE_INFINITY === -Infinity); // true
```

Fortunately comparison operators (`<` / `>`) work reliably on infinity values:

```js
console.log( Infinity >  1); // true
console.log(-Infinity < -1); // true
```

### Infinitesimal

The smallest non-zero value representable in Number is available as static `Number.MIN_VALUE`

```js
console.log(Number.MIN_VALUE);  // 5e-324
```

Values smaller than `MIN_VALUE` ("underflow values") are converted to 0.

```js
console.log(Number.MIN_VALUE / 10);  // 0
```

> Further intuition: Just like values bigger than `Number.MAX_VALUE` get clamped to INFINITY, values smaller than `Number.MIN_VALUE` get clamped to `0`.

### Truthy

JavaScript has a concept of `truthy` i.e. things that evaluate like `true` would in certain positions (e.g. `if` conditions and the boolean `&&` `||` operators). The following things are truthy in JavaScript. An example is any number other than `0` e.g.

```typescript
if (123) { // Will be treated like `true`
  console.log('Any number other than 0 is truthy');
}
```

Something that isn't truthy is called `falsy`.

Here's a handy table for your reference.

| Variable Type   | When it is *falsy*       | When it is *truthy*      |
|-----------------|--------------------------|--------------------------|
| `boolean`       | `false`                  | `true`                   |
| `string`        | `''` (empty string)      | any other string         |
| `number`        | `0`  `NaN`               | any other number         |
| `null`          | always                   | never                    |
| `undefined`     | always                   | never                    |
| Any other Object including empty ones like `{}`,`[]` | never | always |


### Being explicit

> The `!!` pattern

Quite commonly it helps to be explicit that the intent is to treat the value as a `boolean` and convert it into a *true boolean* (one of `true`|`false`). You can easily convert values to a true boolean by prefixing it with `!!` e.g. `!!foo`. Its just `!` used *twice*. The first `!` converts the variable (in this case `foo`) to a boolean but inverts the logic (*truthy* -`!`> `false`, *falsy* -`!`> `true`). The second one toggles it again to match the nature of the original object (e.g. *truthy* -`!`> `false` -`!`> `true`).

It is common to use this pattern in lots of places e.g.

```js
// Direct variables
const hasName = !!name;

// As members of objects
const someObj = {
  hasName: !!name
}

// e.g. in ReactJS JSX
{!!someName && <div>{someName}</div>}
```

## Empty Types

- [x] NaN
- [x] Infinity

## BigInt

Although, the other way around is proposed by the developers of **JSBI library**.
This library implements big numbers using its own methods. We can use them instead of native bigints.

```js
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
const bigInt = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
```


## Equality

One thing to be careful about in JavaScript is the difference between `==` and `===`. As JavaScript tries to
be resilient against programming errors `==` tries to do type coercion between two variables e.g. converts a
string to a number so that you can compare with a number as shown below:

However, the choices JavaScript makes are not always ideal. For example, in the below example the first statement is false
because `""` and `"0"` are both strings and are clearly not equal. However, in the second case both `0` and the
empty string (`""`) are falsy (i.e. behave like `false`) and are therefore equal with respect to `==`. Both statements
are false when you use `===`.

[[Error_Equality]] [[Error_TS2367]]
<!-- skip -->
```typescript
console.log(5 == "5"); // true   , TS Error
console.log(5 === "5"); // false , TS Error
console.log("" == "0"); // false , TS Error
console.log(0 == ""); // true , TS Error
console.log("" === "0"); // false , TS Error
console.log(0 === ""); // false , TS Error

```

`> Output:`

```md
error TS2367: This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.
```


> Note that `string == number` and `string === number` are both compile time errors in TypeScript, so you don't normally need to worry about this.

Similar to `==` vs. `===`, there is `!=` vs. `!==`

So ProTip: Always use `===` and `!==` except for null checks, which we cover later.

## Structural Equality 
If you want to compare two objects for structural equality `==`/`===` are ***not*** sufficient. e.g. 

`>tags:` #Important [[Error_Equality]] [[Error_TS2839]]
<!-- skip -->
```js
console.log({a:123} == {a:123}); // False
console.log({a:123} === {a:123}); // False
```

To do such checks use the [deep-equal](https://www.npmjs.com/package/deep-equal) npm package e.g. 

`> Output:`

```md
error TS2839: This condition will always return 'false' since JavaScript compares objects by reference, not value.
```


[[Library_Deep-Equal]]

```typescript
import * as deepEqual from "deep-equal";

console.log(deepEqual({a:123},{a:123})); // True
```

However, quite commonly you don't need deep checks and all you really need is to check by some `id` e.g. 

```typescript
type IdDisplay = {
  id: string,
  display: string
}
const list: IdDisplay[] = [
  {
    id: 'foo',
    display: 'Foo Select'
  },
  {
    id: 'bar',
    display: 'Bar Select'
  },
]

const fooIndex = list.map(i => i.id).indexOf('foo');
console.log(fooIndex); // Output 0
```

## Function

by defining a function will have access to the objects like:

- [x] Call
- [x] prototype
- [x] arguments


## Closure

The best thing that JavaScript ever got was closures. A function in JavaScript has access to any variables defined in the outer scope. Closures are best explained with examples:

```typescript
function outerFunction(arg:String) {
    var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction); // Access a variable from the outer scope
    }

    // Call the local function to demonstrate that it has access to arg
    bar();
}

outerFunction("hello closure"); // Result: hello closure
```

You can see that the inner function has access to a variable (variableInOuterFunction) from the outer scope. The variables in the outer function have been closed by (or bound in) the inner function. Hence the term **closure**. The concept in itself is simple enough and pretty intuitive.

Now the awesome part: The inner function can access the variables from the outer scope *even after the outer function has returned*. This is because the variables are still bound in the inner function and not dependent on the outer function. Again let's look at an example:

```typescript
function outerFunction(arg) {
    var variableInOuterFunction = arg;
    return function() {
        console.log(variableInOuterFunction);
    }
}

var innerFunction = outerFunction("hello closure!");

// Note the outerFunction has returned
innerFunction(); // logs hello closure!
```

### Reason why it's awesome
It allows you to compose objects easily e.g. the revealing module pattern:

```typescript
function createCounter() {
    let val = 0;
    return {
        increment() { val++ },
        getVal() { return val }
    }
}

let counter = createCounter();
counter.increment();
console.log(counter.getVal()); // 1
counter.increment();
console.log(counter.getVal()); // 2
```

At a high level it is also what makes something like Node.js possible.

```typescript
// Pseudo code to explain the concept
server.on(function handler(req, res) {
    loadData(req.id).then(function(data) {
        // the `res` has been closed over and is available
        res.send(data);
    })
});
```


## This

Any access to `this` keyword within a function is controlled by how the function is actually called. It is commonly referred to as the “calling context.”

Here is an example:

[[Error_TS2683]]

```typescript
function foo() {
  console.log(this);
}
```

`> Output:`

```md
 error TS2683: 'this' implicitly has type 'any' because it does not have a type annotation.
```

```typescript
foo(); // logs out the global e.g. `window` in browsers
let bar = {
  foo
}
bar.foo(); // Logs out `bar` as `foo` was called on `bar`
```

So be mindful of your usage of `this`. If you want to disconnect `this` in a class from the calling context use an arrow function, [more on that later][arrow].


[This keyword in functions and containers](../fp/call_method.md)

[arrow]:../arrow-functions.md

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

## Prototypes and Inheritance

Prototypes enable a form of inheritance in JavaScript, allowing objects to share properties and methods. This is particularly useful for **creating relationships between objects**, such as having a `Car` object inherit from a `Vehicle` object, which in turn inherits from `Object.prototype`.

## References

Beyond literals, any Object in JavaScript (including functions, arrays, regexp etc) are references. This means the following

### Mutations are across all references

[[Error_TS2339]]

```js
var foo = {};
var bar = foo; // bar is a reference to the same object

foo.baz = 123;
console.log(bar.baz); // JS Result: 123, TS Result : Error
```

`> Output:`

```md
error TS2339: Property 'baz' does not exist on type '{}'.
```

### Equality is for references

[[Error_TS2304]]

```js
var foo = {};
var bar = foo; // bar is a reference
var baz = {}; // baz is a *new object* distinct from `foo`

console.log(foo === bar); //JS, TS Result: true
console.log(foo === baz); //JS, TS Result: false
```

`> Output:`

```md
error TS2304: Cannot find name 'someglobal'.
```

## Recap
### Your JavaScript is TypeScript

There were (and will continue to be) a lot of competitors in *Some syntax* to *JavaScript* compilers. TypeScript is different from them in that *Your JavaScript is TypeScript*. Here's a diagram:

![JavaScript is TypeScript](https://raw.githubusercontent.com/armanriazi/typescript-all-in-one/master/images/venn.png)

However, it does mean that *you need to learn JavaScript* (the good news is *you **only** need to learn JavaScript*). TypeScript is just standardizing all the ways you provide *good documentation* on JavaScript.

* Just giving you a new syntax doesn't help catch bugs - but might help you write cleaner / less bugs (e.g. CoffeeScript).
* Creating a new language abstracts you too far from your runtimes and communities - but might help on-board you easier if its an already familiar flavour (e.g. Dart - closer for Java / C# devs).

TypeScript is just JavaScript with docs.

> JSNext is open to interpretation - not everything proposed for the next version of JS actually makes it to browsers. TypeScript only adds support for proposals once they reach [stage 3](https://tc39.es/process-document/).

### Making JavaScript Better

TypeScript will try to protect you from portions of JavaScript that never worked (so you don't need to remember this stuff):

```typescript
[] + []; // JavaScript will give you "" (which makes little sense), TypeScript will error

//
// other things that are nonsensical in JavaScript
// - don't give a runtime error (making debugging hard)
// - but TypeScript will give a compile time error (making debugging unnecessary)
//
{} + []; // JS : 0, TS Error
[] + {}; // JS : "[object Object]", TS Error
{} + {}; // JS : NaN or [object Object][object Object] depending upon browser, TS Error
"hello" - 1; // JS : NaN, TS Error

function add(a,b) {
  return
    a + b; // JS : undefined, TS Error 'unreachable code detected'
}
```

Essentially TypeScript is linting JavaScript. Just doing a better job at it than other linters that don't have *type information*.

### You still need to learn JavaScript

That said TypeScript is very pragmatic about the fact that *you do write JavaScript* so there are some things about JavaScript that you still need to know in order to not be caught off-guard. Let's discuss them next.

> Note: TypeScript is a superset of JavaScript. Just with documentation that can actually be used by compilers / IDEs ;)