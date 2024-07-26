

## Default Arguments

Default argument or default parameter is the new feature in ES6. It allows you to set a default value for your function parameter/argument if no value or undefined of is passed.

Handling Default Argument with ES5

```javascript
    function add(a, b){
    		return a + b;
    }
    add() // NaN
    // Handling Default Argument without ES6.
    function add(a, b){
    	const a = (typeof(a) !== 'undefined') ? a : 5;
    	const b = (typeof(b) !== 'undefined') ? b : 10;
      return a+b;
    }
    add() // Returns 15
```    

When no parameter is passed you can see we have to explicitly handle the error by setting default values of a & b. This doesn't look like a favourable way of handling default arguments.

Handling Default Argument with ES6

```javascript
    function add(a=5, b=10){
    	return a+b;
    }
    add(); // a=5, b=10, sum = 15;
    add(2, 3); // a=2, b=3, sum = 5;
    add(4); // a=4, b=10, sum=14 ;
```

Default value of A and B will be only used when no parameter is passed.