// Homework Wk4, JS 2

//-----------------------   Problem 1  ------------------------------------//

const wordList = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
let smallestWord = " ";
let leastLetters = 1000;
let smallestIndex = -1;

for (i = 0; i < wordList.length; i++) {
    if (leastLetters >= wordList[i].length) {
        leastLetters = wordList[i].length;
        smallestIndex = i;
        smallestWord =  wordList[i];
    }
}
console.log ('The smallest word in this array is ' + smallestWord + ' at index ' + smallestIndex);

//--------------------------  End  -------------------------------  ---------//


// ----------------------  Problem 2  ---------------------------------------//

// Finding the average of an array

const averageOfArray = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

let average = 0;

for (i = 0; i < averageOfArray.length; i++){
    average = average + averageOfArray[i] / averageOfArray.length;
}
console.log (average.toFixed(2)); 

//-------------------------- Problem 2 - Part 2-----------------------------//

// Finding the median of the same array

//Step 1 - Sorting  the array...

let arraySort = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
arraySort.sort (function(a, b) {
    return a - b;
  });
console.log (arraySort); //Output = [1300000, 2100000, 3000000, 3500000, 8000000, 40000000, 100000000]

let medianOfArray = Math.floor(arraySort.length /2); 

console.log (medianOfArray); //output = 3 i.e Index of the number in median position

console.log (arraySort[3]); // output = 3500000

//-------------------------------------------------------------

// Creating a function that calculates array as well as median and gives out the output in the form of an object

let parameters = {
  average: 0.0,
  median: 0.0,  
}

arrayA = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function center (array) { // Calculating average 
  let avg =  0;
  for (i = 0; i < array.length; i++){
    avg = avg + array[i] / array.length;
}
parameters.average = avg.toFixed(2); 

array.sort (function(a, b) { // Sorting the array to get median
  return a - b;
});

let medianOfArray = Math.floor(array.length /2); 

parameters.median = array[medianOfArray];

}

center (arrayA); // Calling the function to get array displayed

console.log (parameters);