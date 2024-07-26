    // Write a Function to print sum of arguments.Without Using Rest Parameter(...) at ES6

    function add() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
          sum = sum + arguments[i];
        }
        return sum;
      }
  
      console.log(add(1, 2, 3, 4, 5)); // 15
  
      console.log(add(1, 3, 4)); // 8