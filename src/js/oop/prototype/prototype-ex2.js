///
/// ```bash
/// node ./src/js/oop/prototype/prototype-ex2.js
/// ```
///
const personProto = {
    greet() {
      console.log('Hello!');
    }
  };
  
  const jim = Object.create(personProto);
  jim.greet(); // Outputs: Hello!