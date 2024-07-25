# Introductory 

## Types


### Empty Types

- [x] NaN
- [x] Infinity

### BigInt

Although, the other way around is proposed by the developers of **JSBI library**.
This library implements big numbers using its own methods. We can use them instead of native bigints.

```js
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
const bigInt = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
```