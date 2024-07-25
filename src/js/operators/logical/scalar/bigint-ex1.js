///
/// ```bash
/// node ./src/js/operators/logical/scalar/bigint-ex1.js
/// ```
///

console.log( 1n || 2 ); // 1 (1n is considered truthy)
console.log( 0n || 2 ); // 2 (0n is considered falsy)