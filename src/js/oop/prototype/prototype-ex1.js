///
/// ```bash
/// node ./src/js/oop/prototype/prototype-ex1.js
/// ```
///

function Person(name) {
    this.name = name;
}
  
Person.prototype.sayHello = function() {
console.log(`Hello, my name is ${this.name}.`);
};

const john = new Person('John');
john.sayHello(); // Outputs: Hello, my name is John.