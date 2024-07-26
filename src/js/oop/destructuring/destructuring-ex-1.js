    
///
/// ```bash
/// node ./src/js/oop/destructuring/destructuring-ex-1.js
/// ```
    // Example 1 - Object Destructuring

    var user = {
    	name : 'Deepak',
      username : 'dipakkr',
      password : 12345
    }

    const name = user.name; // Deepak
    const username = user.username; // dipakkr
    const password = user.password // 12345

    //Example 2 - Array Destructing

    const fruits = ["apple", "mango", "banana", "grapes"];

    const fruit1 = fruits[0];
    const fruit2 = fruits[1];
    const fruit3 = fruits[2];

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);