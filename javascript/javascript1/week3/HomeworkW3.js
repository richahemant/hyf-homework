//--------------------------------   Exercise No 1.  ----------------------------------//

const names = ['Peter', 'Yana', 'Ahmad','Kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala'];
const nameToRemove = 'Ahmad';
for(let i=0; i<names.length; i++){
    if (names[i]===nameToRemove){
        names.splice(i,1);
    }
}
console.log (names);

//  Second practice problem from old homework sheet

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomNumber = parseInt(Math.random() * 11);

for(i=0; i<=numbersArray.length; i++) {
    if (numbersArray[i] === randomNumber){
        numbersArray.splice(i,1);
    }
}
console.log(numbersArray);

//---------------------------------Exercise No 2.-------------------------------------//

const travelInfo = {
    speed: 50,
    distance: 432,
};

function travelTime (travelInfo){

    const totTime = travelInfo.distance / travelInfo.speed;

    const hh = Math.floor(totTime);

    const min = totTime % 1;

    const mm = Math.floor(min * 60);

    let timeMessage = hh + " hours " + mm + " mins";

    return timeMessage;
}

console.log (travelTime(travelInfo));



//------------------------------Excersise No 3.----------------------------------------

const seriesDuration = [
    {
        title: 'Game of Thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Friends",
        days: 19,
        hours: 8,
        minutes: 27,
    },
    {
        title: "HIMYM",
        days: 22,
        hours: 12,
        minutes: 43,
    }
    ]

    function timeOfLife(seriesDuration) {

        //life span in minutes 80 Years
        let avgLifeSpan = 80 * 365 * 24 * 60;

        let totalPortion = 0.0;
        let timePortion = 0.0;

        for(let i=0; i<seriesDuration.length; i++) {
            showTime = seriesDuration[i].days * 24 * 60 + seriesDuration[i].hours * 60 + seriesDuration[i].minutes;
            timePortion = showTime / avgLifeSpan * 100;
            console.log(seriesDuration[i].title + " took " + timePortion.toFixed(3) + " % of my life");

            totalPortion += timePortion;
        }

        console.log("TV Shows totally took " + totalPortion.toFixed(3) + " % of my life");
    }

timeOfLife(seriesDuration);

//------------------------------Excersise No 4.----------------------------------------

const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];

function addSongToDatabase(songTitle, songArtist){

    //New Song ID is last song id + 1
    let newId = songDatabase[songDatabase.length - 1].songId + 1;

    //Add a new song using a push statement
    songDatabase.push({songId: newId , title: songTitle, artist: songArtist});
    //No return statement required
}

addSongToDatabase('Girls like you', 'Maroon5');

console.log(songDatabase);

function getSongbyTitle(searchTitle) {
    searchFlag = -1;

    for(let i=0; i<songDatabase.length; i++){
        if(songDatabase[i].title === searchTitle){
            searchFlag = i;
        }
    }

    return(searchFlag);

}

let songIndex = getSongbyTitle('Girls like you');
if(songIndex > 0){
    console.log(songDatabase[songIndex]);
} else{
    console.log("Song not found.")
}

songIndex = getSongbyTitle('Here we go again');
if(songIndex > 0){
    console.log(songDatabase[songIndex]);
} else{
    console.log("Song not found.")
}

function addSongToMyPlaylist(songTitle){
     let i = getSongbyTitle(songTitle);

     if(i>=0) { 
         myPlaylist.push(songDatabase[i]);
         console.log(songTitle + " Added");
         console.log(myPlaylist);
        } else{
            console.log('Song does not exist in database, Unable to add to the playlist');
        }
     }

addSongToMyPlaylist('Girls like you');
addSongToMyPlaylist('My baby');


//-------------------------Excersise No. 5 -------------------------------------------------------

let notes = [];

function addNote(note) {

    id = notes.length;

    notes.push({id: id, content: note});

}

addNote("Hello World");
addNote("Does this work?");
console.log(notes);

function getNoteFromId(queryId){
    if(queryId === undefined){
        console.log("You'll need to give some ID Number");
    } else if( queryId < 0 || queryId >= notes.length ){
         console.log("This id does not exist");
    } else{
        for(i=0; i<notes.length; i++){
            if(queryId === i)
                console.log(notes[i].content);
        }
    } 

}

getNoteFromId();
getNoteFromId(-2);
getNoteFromId(2);
getNoteFromId(0);
getNoteFromId(1);

function logOutNotesFormatted(){
    for(let i=0; i<notes.length; i++){
        message = "The note with id#" + notes[i].id + " is '" + notes[i].content + "'";
        console.log(message);
    }
}

logOutNotesFormatted();