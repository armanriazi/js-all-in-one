///
/// ```bash
/// node ./src/js/types/big/int/int-error-ex2.js
/// ```
///
let bigint = 1n;

console.log( +bigint ); // error

//So we should use Number() to convert a bigint to a number.