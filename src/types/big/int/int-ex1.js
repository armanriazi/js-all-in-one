///
/// ```bash
/// node ./src/types/big/int-ex1.js
/// ```
/// Although, the other way around is proposed by the developers of JSBI library.
/// This library implements big numbers using its own methods. We can use them instead of native bigints
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

const bigInt = 1234567890123456789012345678901234567890n;