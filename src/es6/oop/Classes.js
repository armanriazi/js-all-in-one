
///
/// ```bash
/// node ./src/es6/oop/Classes.js
/// ```
// create the Car class
class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}
// create the Toyota class and make inheritance from Car class
class Toyota extends Car {
  constructor(options) {
    super(options);
    this.title = options.title;
  }

  honk() {
    return 'beep';
  }
}
const car = new Car({ title: 'Focus' });
const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
console.log(car.drive());
console.log(toyota.drive());

console.log("------------Next----------")

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite() {
    this.health -= 10;
  }
}
const monster = new Monster({ health: 500, name: 'Monster'});
const snake = new Snake({ health: 1000, name: 'Snake'});
console.log(monster.health);
console.log(snake.bite());