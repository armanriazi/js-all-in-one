///
/// ```bash
/// node ./src/es6/oop/EnhancedObjectLiterals.js
/// ```
///

// // without Enhanced Object Literals
// function createBookShop(inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function() {
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle: function(title) {
//       return this.inventory.find(book => book.title === title).price;
//     }
//   };
// }

// with Enhanced Object Literals
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent JavaScript', price: 15 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop);
console.log('------Next------');


// const red = '#ff0000';
// const blue = '#0000ff';
// const COLORS = { red: red, blue: blue };
const red = '#ff0000';
const blue = '#0000ff';
const COLORS = { red, blue };
