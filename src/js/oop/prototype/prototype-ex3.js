
///
/// ```bash
/// node ./src/js/oop/prototype/prototype-ex3.js
/// ```
// create the Car object
function Car(options) {
    this.title = options.title;
  }
  
  Car.prototype.drive = function() {
    return 'vroom';
  }
  
  // create the Toyota object and make inheritance from Car object
  function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
  }
  
  Toyota.prototype = Object.create(Car.prototype);
  Toyota.prototype.constructor = Toyota;
  Toyota.prototype.honk = function() {
    return 'beep';
  }
  
  const car = new Car({ title: 'Focus' });
  const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
  console.log(car.drive());
  console.log(toyota.drive());