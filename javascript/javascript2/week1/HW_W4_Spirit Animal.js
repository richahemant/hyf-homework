

// List of spirit animals...

const spiritAnimals = ["The Adventurous Wolf", "The Mystical Tiger", "The Passionate Leopard", "The Intuitive Elephant",
"The Giant Panda", "The Victorious Butterfly", "The Magical Monkey", "The Wild Dragon", "The Creative Dolphin",
"The Courageous Panther", "The Graceful Dove", "The Speedy Eagle"];

// Formula for random selection of animal names from array...
const randomAnimal = (Math.floor(Math.random () * 12) + 0);

//DOM aspect of JS to connect the html to JS...

const myBtn = document.getElementById ('myBtn');
const myUser = document.getElementById ('userName');

myBtn.addEventListener ('click', whenClicked );

myUser.addEventListener ('mouseover', whenClicked);
myUser.addEventListener ('mouseout', whenClicked);


function whenClicked (){
let name = document.getElementById ('userName').value;
let displayMsg = document.getElementById ('returnMsg');

    if (name === "") {
        displayMsg.innerHTML = "Please enter your name first";
    } else {
        displayMsg.innerHTML = ("You are - " + name + "-" + spiritAnimals[randomAnimal]);
    }
}
