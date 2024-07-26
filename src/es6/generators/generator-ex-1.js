///
/// ```bash
/// node ./src/es6/generators/generator-ex-1.js
/// ```
///
function* shopping() { // Generator
    // stuff on the sidewalk
    // walking down the sidewalk
    // go into the store with cash
    const stuffFromStore = yield 'cash'; // execution state 
  
    // walking to laundry place
    const cleanClothes = yield 'laundry'; //execution state 
  
    // walking back home
    return [stuffFromStore, cleanClothes];
  }
  
  // stuff in the store
  const gen = shopping();
  console.log(gen.next()); // leaving our house
  // walked into the store
  // walking up and down the aisles...
  // purchase our stuff
  console.log(gen.next('groceries')); // leaving the store with groceries
  console.log(gen.next('clean clothes'));
  