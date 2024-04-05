// A bigint is created by appending n to the end of an integer literal or by calling the function BigInt
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // same as 10n

console.log(1n + 2n); // 3

console.log(5n / 2n); // 2

