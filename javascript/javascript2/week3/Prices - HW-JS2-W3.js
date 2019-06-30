// Get product details from getAvailableProducts()

products = getAvailableProducts();

//check if products have been loaded
console.log(products);

//create an empty array to hold prices to be sent to the server
priceArray = [];

for(item of products){
    //push the price of each product
    priceArray.push(item.price)
}

//publish the priceArray for checking. 
console.log(priceArray);

//create callback function for sendPricesToServer()
function serverResponse(message){
    console.log(message);
}

//call sendPricesToServer()
sendPricesToServer(priceArray, serverResponse);