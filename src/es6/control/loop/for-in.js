///
/// ```bash
/// node ./src/es6/control/loop/for-in.js
/// ```
const array = [5, 10, 15, 20, 25, 30, 35];

for(var value in array){
	console.log(array[value]);
}

// To access the element of the array, We are using array[postion] notation.