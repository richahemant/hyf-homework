console.log('Script loaded');

products = getAvailableProducts();

console.log(products);

list = document.getElementById('shoppingList');

for(i = 0; i<products.length; i++){

    let outerItem = document.createElement('ul');

    //sub list item for name
    let innerItemName = document.createElement('li')
    innerItemName.setAttribute('class', 'itemName');
    let name = document.createTextNode('Item: ' + products[i].name);
    innerItemName.appendChild(name);

    outerItem.appendChild(innerItemName);

    //sub list item for price
    let innerItemPrice = document.createElement('li');
    innerItemPrice.setAttribute('class', 'itemDescriptors');
    let price = document.createTextNode("Price: " + products[i].price);
    innerItemPrice.appendChild(price);

    outerItem.appendChild(innerItemPrice);

    //sub list item for rating
    let innerItemRating = document.createElement('li');
    innerItemRating.setAttribute('class', 'itemDescriptors');  
    let rating = document.createTextNode("Rating: " + products[i].rating);
    innerItemRating.appendChild(rating);

    outerItem.appendChild(innerItemRating);

    //sub sub list item for Ship to
    let innerItemShip = document.createElement('ul');
    innerItemRating.setAttribute('class', 'itemDescriptors');  
    let label = document.createTextNode("Shipping To: ");
    innerItemShip.appendChild(label);

    for(j=0; j < products[i].shipsTo.length; j++) {
        let shipCountry = document.createElement('li');
        shipCountry.setAttribute('class', 'shippingCountry');
        let country = document.createTextNode(products[i].shipsTo[j]);
        shipCountry.appendChild(country);

        innerItemShip.appendChild(shipCountry);
    }

    outerItem.appendChild(innerItemShip);


    list.append(outerItem);

}