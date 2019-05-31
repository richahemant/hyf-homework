
//-------------------Flight booking fullname function-------------------------//

const firstName = "Richa";
const surname = "Hemant";
const useFormalName = true;
const formalName = "Lady";
let fullName1 ; //
let fullName2 ;


function getFullName (firstName , surname,  formalName, useFormalName){ //inputs for the function//
 if (useFormalName === true){ //boolean for the condition of whether to use the formal name//
     fullName1 = (formalName + " " + firstName + " " + surname);
     return (fullName1);
 }  else {
     fullName2  = (firstName + " " + surname);
     return (fullName2);
 }
}

fullName1= getFullName(firstName, surname, formalName, useFormalName)

console.log ("The full name of the traveller is" + " " + fullName1 ); 

//--------------------------End of No.1---------------------------------------//



// -------------------------Weather wear--------------------------------------//

function asPerTemp (tempToday) { // Defining conditions for weather wear 
    if (tempToday < 0) {
        clothesToWear = "Thermals, thick winter jacket, gloves and boots";
    } else if (tempToday <= 5){
        clothesToWear = "Winter jacket, gloves and boots";
    } else if (tempToday <= 10) {
        clothesToWear = "Regular jacket and jeans";  
    } else if (tempToday <= 15) {
        clothesToWear = "Jeans and a t-shirt";
    } else if (tempToday > 15) {
        clothesToWear = "Shorts and a t-shirt";
    }
        return(clothesToWear);
}
    let tempToday = 9 //Enter any number as temperature to get output of the function based on parameters above
    console.log (asPerTemp (tempToday));

//----------------------------End of No.2---------------------------------------//



//--------------------------Student Manager Code--------------------------------//


function addStudentToClass(studentName, studentList) {

    // Check if the studentName already exists. If yes, return comment that student exists
    // else continue
    if(studentList.indexOf(studentName) == -1) {
        // -1 indicates that the student does not exist in current class. Hence can be added.

        //Next condition is to check if the incoming student is the Queen. This is a nested if statement.
        if(studentName === 'Queen'){
            studentList.push(studentName);
            message = "Queen Must be Added"; //Queen is mandatory to add as per the exercise
            return(message);
        } else{
            //if the class size is less than 6, the student can be added else refuse admission.
            if(getNumberOfStudents(studentList) < 6){ //means there is space to add the new student, so we add them
                studentList.push(studentName);
                message = studentName + " Added to the class...";
                return(message);
            } else {
                message = "The class is already full..."
                return(message);
                }
        }   
    } else{
        //Student cannot be added. 
        message = "Student Already Exists";
        return(message);
    }
}
function getNumberOfStudents(studentList) {
    return(studentList.length)
}
const class07Students = ["Abel", "Bob", "Clara", "Dennis", "Pearl", "Raj"]; //This is the studentList the function will refer to as it is defined outside the scope of the function

list = addStudentToClass("Richa", class07Students);
console.log(list);
console.log(class07Students);

//----------------------------------------End of No.3----------------------------------//



//-----------------------------Event Application---------------------------------------//

function numToDayConverter(n) { //defining day of the week based on the 'Index' of the weekday starting from Sunday as '0', Monday as '1' and so on to get output as name of weekday insted of just the index number
    let day = "XXX";

    if(n==0) {
        day = 'Sunday';
    } 
    if(n==1){
        day = 'Monday';
    }
    if(n==2){
        day = 'Tuesday';
    }
    if(n==3){
        day = 'Wednesday';
    }
    if(n==4){
        day = 'Thursday';
    }
    if(n==5){
        day = 'Friday';
    }
    if(n==6){
        day = 'Saturday';
    }
    return(day)
}

function getEventWeekDay(n) {
    
    // Find out what day it is today.
    // a) Create a class 'd' for accessing the getDay function which tells you what day it is today.

    d = new Date();

    // b) use the getDay() function to figure out what day it is today.
    today = d.getDay();

    //The day ahead is todays remainder of the sum of the day it is today and the number of days ahead 
    // after dividing the number of days by 6//
    dayAhead = ((today + n) % 6);
    //console.log(dayAhead);
    day = numToDayConverter(dayAhead);
    //console.log(day);
    return(day);
}
dayAhead = 12;
console.log("In "+ dayAhead + " days it would be " + getEventWeekDay(dayAhead));

// ----------------------------------End of No.4------------------------------------------//


//-----------------------------------Candy Helper----------------------------------------//


let quantity = [0,0,0,0]; //nothing purchased yet..so quantity is 0 for now
const rate = [0.5, 0.7, 1.1, 0.03]; //prices given for the different kinds of candy
let amountTospend = Math.random() * 100; // random amount generated by system
let boughtCandyPrices = []; //Prices computed through the function will be pushed into this array

console.log("Amount to Spend: " + amountTospend); //displays disposable amount generated randomly

function addCandy (candyType, weight){ 
    let price = weight * rate[candyType]; 
    quantity[candyType] = quantity[candyType] + weight; //new quantity = old quantity + weight now added
    boughtCandyPrices.push(price); //pushing the price to the array
}
function canBuyMoreCandy(){
    cost = 0;
    for(let i=0; i<quantity.length; i++){
        cost = cost + quantity[i] * rate[i]; //Using for loop to 
    }
    console.log("Spend Potential: " + (amountTospend - cost)); //
    if(cost<amountTospend){
        console.log('You can Buy ' + (amountTospend - cost) + " worth more of Candy, so please do!");
    } else{
        console.log("Enough candy for you!");
    }
}
addCandy(1, 32); // first input for candy type and second for weight of the candy bought
console.log(quantity, boughtCandyPrices);
canBuyMoreCandy();
addCandy(0, 15); //repeating to assess output based on random value recieved
console.log(quantity, boughtCandyPrices);
canBuyMoreCandy(); 
addCandy(3, 33.33333); //repeating to assess output based on random value recieved
console.log(quantity, boughtCandyPrices);
canBuyMoreCandy(); 

//------------------------------------------End of No.5-----------------------------------------//