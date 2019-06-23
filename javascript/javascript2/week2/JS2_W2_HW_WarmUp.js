// Warmup array exercises

// 1. 

let numbers = [5,6,7,8,9];

let newNumbers = numbers.map(even => even % 2 !== 0);
console.log (newNumbers); // why are my values in boolean??

let doubledNumbers = newNumbers.map (double => double * 2);
console.log (doubledNumbers); 

// 2.

let nums = [7,8,9,10,11];

let filteredNumbers = nums.filter(odd => odd % 2 !== 0)
console.log (filteredNumbers);

let doubledFilteredNumbers = filteredNumbers.map(doubleNum => doubleNum * 2);
console.log (doubledFilteredNumbers);