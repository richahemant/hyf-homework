
queryURL = "https://api.chucknorris.io/jokes/random";

fetch(queryURL)
.then((resp) => resp.json())
.then(function(data){
    joke = document.getElementById("joke");
    joke.innerHTML = data.value;
})
.catch(function(error){
    console.log(error);
})