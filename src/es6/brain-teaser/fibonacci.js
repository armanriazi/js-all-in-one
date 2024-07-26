///
/// ```bash
/// node ./src/es6/brain-teaser/fibonacci.js
/// ```
///
let fibonacci = {
    [Symbol.iterator]() {
      let pre = 0, cur = 1;
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { done: false, value: cur }
        }
      }
    }
  }
  
  for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 15)
      break;
    console.log(n);
  }


  //TS:

//   interface IteratorResult {
//     done: boolean;
//     value: any;
//   }
//   interface Iterator {
//     next(): IteratorResult;
//   }
//   interface Iterable {
//     [Symbol.iterator](): Iterator
//   }