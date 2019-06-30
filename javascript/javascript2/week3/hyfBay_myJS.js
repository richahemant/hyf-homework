console.log("Script loaded");

products = getAvailableProducts();

console.log(products); //from BHs HTML section?? - Yes

let list = document.getElementById("shoppingList"); //what is the list tag? - Its the name of a declaration, not a tag

document.getElementById('searchProduct').addEventListener("input", showSearchProduct);
document.getElementById('queryCountry').addEventListener("change", showItemsFilteredByCountry);

function showSearchProduct(){

    //Remove all Children to list to update the page.
    list.innerHTML = "";

    let searchedItemTag = document.getElementById('searchProduct');
    let searchedProduct = searchedItemTag.value ;
    //Check if anything found
    console.log('You are searching for ' + searchedProduct);

    let foundFlag = -1;

    for(let objects of products){
        if(searchedProduct === objects.name){
            renderProduct(objects);
            foundFlag = 1;
        }
    }

    if(foundFlag < 0){
        console.log(searchedProduct + " Not Found..");
    }

}

function showItemsFilteredByCountry(){
    
    //Remove all Children to list to update the page.
    list.innerHTML = "";

    let country = document.getElementById('queryCountry');
    
    let selectedCountry = country.options[country.selectedIndex].innerHTML;

    console.log(selectedCountry);

    for (let objects of products) {
        if (objects.shipsTo.indexOf(selectedCountry) != -1)
        {
            console.log("We are looking at: " + objects.name);
            renderProduct(objects);
        } 
    }
}

function renderProduct(individualProduct){
    let outerItem = document.createElement("ul");
    
    //sub list item for name
    let innerItemName = document.createElement("li");
    innerItemName.setAttribute("class", "itemName");
    let name = document.createTextNode("Item: " + individualProduct.name);
    innerItemName.appendChild(name);

    outerItem.appendChild(innerItemName);

    //sub list item for price
    let innerItemPrice = document.createElement("li");
    innerItemPrice.setAttribute("class", "itemDescriptors");
    let price = document.createTextNode("Price: " + individualProduct.price);
    innerItemPrice.appendChild(price);

    outerItem.appendChild(innerItemPrice);

    //sub list item for rating
    let innerItemRating = document.createElement("li");
    innerItemRating.setAttribute("class", "itemDescriptors");
    let rating = document.createTextNode("Rating: " + individualProduct.rating);
    innerItemRating.appendChild(rating);

    outerItem.appendChild(innerItemRating);

    //sub sub list item for Ship to
    let innerItemShip = document.createElement("ul");
    innerItemRating.setAttribute("class", "itemDescriptors");
    let label = document.createTextNode("Shipped To: ");
    innerItemShip.appendChild(label);

    for (let countries of individualProduct.shipsTo) {
        let shipCountry = document.createElement("li");
        shipCountry.setAttribute("class", "shippingCountry");
        let country = document.createTextNode(countries);
        shipCountry.appendChild(country);

        innerItemShip.appendChild(shipCountry);
    }

    outerItem.appendChild(innerItemShip);
    
    let linebreak = document.createElement("br");
    outerItem.appendChild(linebreak);

    list.append(outerItem);
    } 

// Price Analytics - Send all product Prices to server and await response
// Get product details from getAvailableProducts()

products = getAvailableProducts();

//check if products have been loaded. To be commented out
//console.log(products);

//create an empty array to hold prices to be sent to the server
priceArray = [];

for(item of products){
    //push the price of each product
    priceArray.push(item.price)
}

//publish the priceArray for checking. to be commented out.
//console.log(priceArray);

//create callback function for sendPricesToServer()
function serverResponse(message){
    console.log(message);
}

//call sendPricesToServer()
sendPricesToServer(priceArray, serverResponse);
