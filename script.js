// first challenge
const arr = [1, 2, 3, 4, 5];

// Reverse the array
arr.reverse();

// Append 0 at the end
arr.push(0);

// Prepend 6 at the beginning
arr.unshift(6);

console.log(arr);
// [6, 5, 4, 3, 2, 1, 0]


// second challenge
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Combine arrays using concat
const combinedArr = arr1.concat(arr2);

// Remove duplicates using a Set
const arr3 = Array.from(new Set(combinedArr));

console.log(arr3);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]