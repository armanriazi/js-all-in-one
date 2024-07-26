# Section 08: `const` and `let`

- [The Keyword `const` and `let`](#the-keyword-const-and-let)
- [[Exercise] A Constant Exercise of Letting Variables Be Variables](#exercise-a-constant-exercise-of-letting-variables-be-variables)
- [[Exercise] Const/Let Refactoring](#exercise-constlet-refactoring)
- [Hoisting](#Hoisting)
- [LoopScope](#LoopScope)
- [Implicit Scope Creation](#Implicit-Scope-Creation)
- [Read-Only const](#Read-Only-const)

## The Keyword `const` and `let`

Block-scoped binding constructs. let is the new var. const is single-assignment. Static restrictions prevent use before assignment.


```javascript
function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      x = "foo";
    }
    // error, already declared in block
    let x = "inner";
  }
}
```

1. Var

- [x] Var keyword was previously used for declaring variable in javascript.
- [x] Variables declared with var can be **re-initialised and re-declared** too.
- [x] It is not recommended to use var after release of let and const.

```javascript
    var a = 10;

    for(var i=0;i<5;i++){
    		var a = 20;
    		console.log(a); //Returns 20
    }

    console.log(a); // Returns 20
```

2. LET

- [x] "let" is used when you have to change the value of the variable later in the code.
- [x] It has block scope.
- [x] It can be **re-initialised but not re-declared**.

```javascript
    let a = 10;

    // re-initialization
    a = 30; // Updating a value to 30.

    //re-declartion
    let a = 20; // Throws Error

    // Block 1
    {
    	 let c = 10;
    	 console.log(c); // c=10
    }

    console.log(c); // Throws Error, c not defined.
```

3. CONST

- [x] Const is used to define a constant variable which can't be changed throught the code.
- [x] It has block scope.
- [x] You can **neither be re-initiased nor re-declared**.

```javascript
    const a = 10;
    // re-initialization
    a = 30; // Throws Error, CONST variable can't be changed

    //re-declartion
    const a = 20; // Throws Error

    // Block 1
    {
    	 const c = 10;
    	 console.log(c); // c=10
    }

    console.log(c); // Throws Error, c not defined.
```

Next Example:

```javascript
const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

// some time later
title = 'Senior Software Engineer';
hourlyWage = 45;
```

We should always use `const` and `let` to declare variables instead of using `var`. Use the `const` and `let` make our codes more legible.

- The keyword `let` declare variables and the value of the variable will change over time.
- The keyword `const` declare variables and the value of the variable will never change.

<br/>
<div align="right">
  <b><a href="#section-08-const-and-let">[ ↥ Back To Top ]</a></b>
</div>
<br/>

## [Exercise] A Constant Exercise of Letting Variables Be Variables

### Question

Imagine that you are building an application to manage a user's Facebook profile. A profile might have a `name`, `age`, and `dateOfBirth`.

Declare three variables with these same names, making sure to use `const` or `let` depending on whether you expect the value to change over time.

### Solution

```javascript
const name = 'Peter';
const dateOfBirth = '900422';
let age = 25;
```

<br/>
<div align="right">
  <b><a href="#section-08-const-and-let">[ ↥ Back To Top ]</a></b>
</div>
<br/>

## [Exercise] Const/Let Refactoring

### Question

The following code uses `var` instead of `const` and `let`. Refactor the function to use the new keywords. Be sure to consider whether the variable should be declared using `const` or `let` depending on whether the variable gets reassigned or not.

```javascript
var statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
```

### Solution

```javascript
const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
```

<br/>
<div align="right">
  <b><a href="#section-08-const-and-let">[ ↥ Back To Top ]</a></b>
</div>
<br/>


## Hoisting
Unlike var declarations which are hoisted to the top of their enclosing scope let and const declarations may only be accessed after they've been declared. let and const variables are said to be in the scope's TDZ (temporal dead zone) before they've been declared, and any attempt to read or write them beforehand will generate an error.
⚠️ Most transpilers currently don't handle this behaviour fully to-spec, so the above example will probably only error in a native ES6 environment.

```javascript
{
  console.log(foo); // 'foo'
  console.log(bar); // ReferenceError: bar is in the 'TDZ'
  var foo = 'foo';
  let bar = 'bar';
}
```

<br/>
<div align="right">
  <b><a href="#section-08-const-and-let">[ ↥ Back To Top ]</a></b>
</div>
<br/>




## LoopScope

When **let is used in a for** loop header a new i is scoped for each iteration of the loop. **This makes writing async code** in loops more intuitive since the closure doesn't need to be created manually. This can also help with traditionally counter-intuituve tasks such as applying click event handlers in a loop.

```javascript
for (var i=1; i<=5; i++) {
    setTimeout(function(){
        console.log(i);
    }, i*100);
}
// 6,6,6,6,6
```

```javascript
for (let i=1; i<=5; i++) {
    setTimeout(function(){
        console.log(i);
    }, i*100);
}
// 1,2,3,4,5
```

<br/>
<div align="right">
  <b><a href="#section-08-const-and-let">[ ↥ Back To Top ]</a></b>
</div>
<br/>


## Implicit-Scope-Creation

Using let within an if block implicitly creates a new scope. This is a hazard of using let. The new scope is easily spotted in the simple example above, but when code becomes more complicated hunting for new scopes created by let could become a cognitive burden. A rule of thumb is to place let declarations at the top of their enclosing block to clearly signpost their use and also avoid being bitten by the TDZ.

```javascript
if ( foo ) {
    // We're in the same scope as outside the 'if'
}
if ( foo ) {
    // We're in a new scope
    let a = 1;
}
```

<br/>
<div align="right">
  <b><a href="#section-08-const-and-let">[ ↥ Back To Top ]</a></b>
</div>
<br/>


## Read-Only-const

As mentioned, reassign a value to a constant will silently fail while redeclaring the constant will throw an error.

```javascript
const foo = 'foo';
foo = 'bar' // Silently fails, foo is still equal to 'foo'
const foo = 'bar' // TypeError, foo has already been defined
```

However constants are not immutable, therefore the properties of non-primitive values defined as a constant may be manipulated freely.

```javascript
const foo = {a: 1};
foo.a = 2;
foo.a; // 2
```

<br/>
<div align="right">
  <b><a href="#section-08-const-and-let">[ ↥ Back To Top ]</a></b>
</div>
<br/>