
//GIPHY API KEY

const API_KEY = "EIZR7BpLNdeqr30ctRWWn4eGyYGxT0BO";

const searchTag = document.getElementById('searchTag');
const limitTag = document.getElementById('limitTag');
const ratingTag = document.getElementById('ratingTag');
const myBtn = document.getElementById('myBtn');
const errorMessage = document.getElementById('errorMessage');
const resultTag = document.getElementById("result");

function giphySearch(){
    //clear all previous responses
    errorMessage.innerHTML = "";
    resultTag.innerHTML = "";
    
    //Initialize values to be passed to queryURL
    let searchString = searchTag.value;
    let limit = limitTag.value;
    let rating = ratingTag.options[ratingTag.selectedIndex].value
    

    if(searchString == ""){

        errorMessage.innerHTML = "You need to give me something to work on... :)";

    } else{
        //Check if searchString and limit are getting properly displayed...
        console.log(searchString);
        console.log(limit);

        //form the queryURL
        //queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + API_KEY + "&q=" + searchString + "&limit=" + limit + "&offset=0&rating=G&lang=en" 
        let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + API_KEY 
                        + "&q=" + searchString 
                        + "&limit=" + limit + "&offset=0&rating=" + rating + "&lang=en";

        //Check if queryURL is properly formed.
        console.log(queryURL);

        //call the api and check response
        fetch(queryURL)
            .then((resp) => resp.json())
            .then(function(data){
                //API Function Call was successful. Print out the response.
                console.log(data);
                if(data.data.length == 0){
                    errorMessage.innerHTML = "Desværre....Nothing here..."
                } else{
                    for(let item of data.data){
                        console.log(item.images.fixed_width.url);
    
                        //Gather the imageURL
                        let imageURL = item.images.fixed_width.url;
                        
                        //create an imageElement
                        let img = document.createElement("img");
                        img.src = imageURL;
    
                        //create a breakline element
                        let br = document.createElement("br");
    
                        //append img to the results div
                        resultTag.appendChild(img);
                        resultTag.appendChild(br);            
    
                    }

                }
                
            })
            .catch(function(error){
                errorMessage.innerHTML = error;
            })
    }

    // //API KEY FOR GIPHY
    // const baseURL = "https://api.giphy.com/v1/gifs/search?api_key=";

    // const APP_ID = "EIZR7BpLNdeqr30ctRWWn4eGyYGxT0BO";

    


    return false;
}

//Call giphy search on 
myBtn.addEventListener('click', giphySearch);
searchTag.addEventListener('keyup', function(event){
    if(event.key === "Enter"){
        giphySearch();
    }
});
