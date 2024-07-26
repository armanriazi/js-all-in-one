///
/// ```bash
/// node ./src/es6/fp/DefaultArguments.js
/// ```
///
    function add1(a, b){
    		return a + b;
    }
  console.log(add1()); // NaN
    // Handling Default Argument without ES6.
    // function add(a, b){
    // 	const a = (typeof(a) !== 'undefined') ? a : 5;
    // 	const b = (typeof(b) !== 'undefined') ? b : 10;
    //   return a+b;
    // }
    // console.log(add()); // Returns 15

console.log('------Next------');    

// Default Argument with ES6.

  function add(a=5, b=10){
    return a+b;
  }
  console.log(add()); // a=5, b=10, sum = 15;
  console.log(add(2, 3)); // a=2, b=3, sum = 5;
  console.log(add(4)); // a=4, b=10, sum=14 ;

