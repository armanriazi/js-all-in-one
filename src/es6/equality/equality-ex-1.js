///
/// ```bash
/// node ./src/es6/equality/equality-ex-1.js
/// ```
///
console.log(5 == "5"); // true   , TS Error
console.log(5 === "5"); // false , TS Error
console.log("" == "0"); // false , TS Error
console.log(0 == ""); // true , TS Error
console.log("" === "0"); // false , TS Error
console.log(0 === ""); // false , TS Error

console.log({a:123} == {a:123}); // False
console.log({a:123} === {a:123}); // False