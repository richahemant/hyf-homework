// Using setTimeout & setInterval on functions - Homework - JS2, W3

// 1.

setTimeout(function() {
  console.log("Called after 2.5 sec");
}, 2500);
// 2.

function delayedMessage(stringToLog, delay) {
  setTimeout(function() {
    console.log(stringToLog);
  }, delay);
}

delayedMessage("Hello World", 5000);

// 3.

let button = document.getElementById("myBtn");

button.addEventListener("click", function() {
  console.log("Button Pressed..");
  console.log("Wait For it....");
  const message = "3.5 sec after button is clicked";
  t = 3500;
  delayedMessage(message, t);

  setTimeout(function() {
    const item = document.getElementById("buttonEvent");
    item.innerHTML = "Something got pressed 3.5 seconds back";
  }, t);
});

// 4. Earth and Saturn

function earth() {
  console.log("This is Earth");
}

function saturn() {
  console.log("This is Saturn");
}

function planetLogFunction(callback) {
  callback();
}

planetLogFunction(earth);
planetLogFunction(saturn);

// 5. Find the Geo Location from the Geolocation API

// Identify the Geo Button Element to have the click event.
let geoBtn = document.getElementById("geoBtn");

//Identify the para element to display the
let myLoc = document.getElementById("myLocation");

function displayLocation() {
  //first we check if geo location is enabled on the browser

  if ("geolocation" in navigator) {
    //Geolocation is available.
    //since it is available, call getCurrentPosition and pass location co-ordinates to myLoc.innerHTML
    // navigator.geolocation.getCurrentPosition(function(position){
    //     myLoc.innerHTML = "Latitude: " + position.coords.latitude + " Longitute: " + position.coords.longitude;
    // });

    navigator.geolocation.getCurrentPosition(function(position) {
      myLoc.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        " Longitute: " +
        position.coords.longitude;
    });
  } else {
    //In case geolocation is not enabled, log out an error message...
    console.log("Navigator is not available");
  }
}

geoBtn.addEventListener("click", displayLocation);

// 7. callback functions

function runAfterDelay(delay, callback) {
  setTimeout(function() {
    console.log("This is the mother Function");
    callback(delay);
  }, delay);
}

function theCallBack(t) {
  console.log("This is the Callback called after a delay of " + t + " ms.");
}

runAfterDelay(1000, theCallBack);
runAfterDelay(3000, theCallBack);

//8. check for double clicks;

//9. Joke Creator

function logFunnyJoke() {
  console.log("This is a good Joke");
}

function logBadJoke() {
  console.log("This is a bad Joke");
}

function jokeCreator(shouldTellFunnyJoke, callback1, callback2) {
  if (shouldTellFunnyJoke == true) {
    callback1();
  } else {
    callback2();
  }
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);

//Function as a Variable

function firstFunction() {
  console.log("This is the first item");
}

function secondFunction() {
  console.log("This is the second item");
}

function thirdFunction() {
  console.log("This is the third item");
}

let i = [firstFunction, secondFunction, thirdFunction];

function callFunctionArray(functions) {
  for (item of functions) {
    item();
  }
}

callFunctionArray(i);

const constFunc = () => {
  console.log("This is the function with a const declaration...");
};

normalFunc = () => {
  console.log("This time we are calling a normal function...");
};

constFunc();
normalFunc();

let student = {
  firstName: "Richa",
  secondName: "Hemant",
  fullName: function() {
    return this.firstName + " " + this.secondName;
  }
};

console.log(student.fullName());
