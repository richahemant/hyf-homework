//console.log("Script loaded");
const searchField = document.getElementById("searchField");
const displayEmoji = document.getElementById("displayEmoji");
const selectDisplay = document.getElementById("selectDisplay");
const favourites = document.getElementById("favourites");
const search = document.getElementById("search");

let allEmojis;
let favouriteList = [];

let categories = [];

fetchEmojis();
//console.log(allEmojis);

selectDisplay.addEventListener("change", displaySelection);
//displayEmoji.addEventListener('click', addToFavourites);

displayEmoji.addEventListener("click", copyOrAddFavs);

searchField.addEventListener("keyup", () => {
  const newListOfEmojis = allEmojis.filter(emoji => {
    return emoji.name.toLowerCase().includes(searchField.value.toLowerCase());
  });
  renderHTML(newListOfEmojis, displayEmoji);
});

function fetchEmojis(showAll) {
  //allEmojis = [];
  fetch("https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json")
    .then(response => response.json())
    .then(json => {
      allEmojis = json;
      console.log(allEmojis);

      //add category elements to the dropdown menu.
      addSelectOptions(allEmojis);

      //Get the dropdown value of the selected element
      displaySelection();
    });
}

function addSelectOptions(emojis) {
  let categories = getCategories(emojis);

  for (let category of categories) {
    let optionElement = document.createElement("option");
    optionElement.value = category;
    optionElement.innerHTML = category;
    selectDisplay.appendChild(optionElement);
  }
}

// Display in the display Emoji area basis selection of drop down menu.
function displaySelection() {
  let selection = selectDisplay.options[selectDisplay.selectedIndex].text;

  //if user wants to see all the emojis available..
  if (selection === "Display All") {
    renderHTML(allEmojis, displayEmoji);
  }
  //If user wants to see single category displayed.
  else {
    //create an empty list for the emoji's
    let singleCategoryEmoji = [];

    //get all the emoji's of a category and append to the singleCategoryEmoji list
    for (let emoji of allEmojis) {
      if (emoji.category === selection) {
        singleCategoryEmoji.push(emoji);
      }
    }
    //Display the single category emoji list.
    renderHTML(singleCategoryEmoji, displayEmoji);
  }
}

function renderHTML(emojis, displayArea) {
  //const ulTag = document.querySelector('ul');
  displayArea.innerHTML = "";
  emojis.forEach(emoji => {
    const liTag = document.createElement("li");
    // liTag.innerHTML = emoji.char

    liTag.id = emoji.codes;
    const emojiSpan = document.createElement("span");

    emojiSpan.innerHTML = emoji.char;
    emojiSpan.classList.add("emoji");
    liTag.appendChild(emojiSpan);

    const nameSpan = document.createElement("div");
    nameSpan.innerHTML = emoji.name;
    nameSpan.classList.add("emojiName");
    liTag.appendChild(nameSpan);
    //

    displayArea.appendChild(liTag);
  });
}

//Get Categories of all Emojis
function getCategories(emojis) {
  categories = [];

  for (let emoji of emojis) {
    if (categories.indexOf(emoji.category) == -1)
      categories.push(emoji.category);
  }

  return categories;
}

function copyOrAddFavs(e) {
  if (e.buttons == 1) {
    console.log("Left Click");
  }
  if (e.buttons != 1) {
    console.log("Right Click");
    addToFavourites(e);
  }
}

function addToFavourites(e) {
  let clickedId;
  if (e.target !== e.currentTarget) {
    clickedId = e.target.id;
    console.log(clickedId);

    //Add emoji corresponding to clickedId to favourites.
    for (let i = 0; i < allEmojis.length; i++) {
      if (allEmojis[i].codes === clickedId) {
        if (favouriteList.indexOf(allEmojis[i]) == -1) {
          favouriteList.push(allEmojis[i]);
        }
      }
    }
  }

  e.stopPropagation();

  //render to favourites
  renderHTML(favouriteList, favourites);
}
