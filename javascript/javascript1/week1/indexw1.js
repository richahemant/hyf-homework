//Age-ify - Future age calculator

let yearOfBirth = 1985
let yearFuture = 2027
let age = yearFuture - yearOfBirth
let result = "You will be " + age + " year\'s old " + "in " + yearFuture;
console.log (result)
  

//Goodboy - Oldboy (A dog-age Calculator)

let dogYearOfBirth = 2017
let dogYearFuture = 2027
let dogYear = dogYearFuture - dogYearOfBirth
let dogAge = dogYear * 7
let shouldShowResultInDogYears = true

if (shouldShowResultInDogYears === true)
{
    console.log ("Your dog will be " + dogAge + " dog years old in " + dogYearFuture);
}
else {
    console.log ("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}


//Housey Pricey (A house price estimator)

let width1 = 8
let depth1 = 10
let height1 = 10
let garden1 = 100
let volume1 = width1 * depth1 * height1
let price1 = (volume1 * 2500)  +  (garden1 * 300)
let differenceForPeter = (2500000 -  price1)


let width2 = 5
let depth2 = 11
let height2 = 8
let garden2 = 70
let volume2 = width1 * depth1 * height1
let price2 = (volume1 * 2500)  +  (garden1 * 300)
let differenceForJulia = (1000000 - price2)

console.log (price1)
console.log (price2)

console.log (differenceForPeter)
console.log (differenceForJulia)

if (differenceForPeter > 0){
    console.log ("Price paid by Peter is too high");
}
else {
    console.log ("Price paid by Peter is too little");
}

if (differenceForJulia >= 0){
    console.log ("Price paid by Julia is too high");
}
else {
    console.log ("Price paid by Julia is too little");
}


// Ez Namey (Startup Name generator)

let firstWords = ["Easy", "Awesome", "Corporate", "Simple", "Brand", "Mega", "Squad", "Win", "Nordic", "Wire"]

let secondWords = ["Peasy", "Life", "Mart", "Vikings", "Fire", "Care", "Hub", "Quirk", "Motion", "Team"]

let startUpNames =[(firstWords[0] + " " + secondWords[0] + " has " + (firstWords[0].length + secondWords[0]                   .length) + " characters in it"),
                  (firstWords[1] + " " + secondWords[2] + " has " + (firstWords[1].length + secondWords[2].length) + " characters in it"),  
                  (firstWords[2] + " " + secondWords[6] + " has " + (firstWords[2].length + secondWords[6].length) + " characters in it"),
                  (firstWords[4] + " " + secondWords[8] + " has " + (firstWords[4].length + secondWords[8].length) + " characters in it"),
                  (firstWords[3] + " " + secondWords[6] + " has " + (firstWords[3].length + secondWords[6].length) + " characters in it"),
                  (firstWords[4] + " " + secondWords[5] + " has " + (firstWords[4].length + secondWords[5].length) + " characters in it"),
                  (firstWords[3] + " " + secondWords[7] + " has " + (firstWords[3].length + secondWords[7].length) + " characters in it"),
                  (firstWords[8] + " " + secondWords[9] + " has " + (firstWords[8].length + secondWords[9].length) + " characters in it"),
                  (firstWords[9] + " " + secondWords[4] + " has " + (firstWords[9].length + secondWords[4].length) + " characters in it"),
                  (firstWords[6] + " " + secondWords[4] + " has " + (firstWords[6].length + secondWords[4].length) + " characters in it"),
                  (firstWords[8] + " " + secondWords[3] + " has " + (firstWords[8].length + secondWords[3].length) + " characters in it"),
                  (firstWords[7] + " " + secondWords[8] + " has " + (firstWords[7].length + secondWords[8].length) + " characters in it")];
               
console.log (startUpNames)