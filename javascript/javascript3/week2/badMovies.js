const url = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

fetch(url)
.then((resp) => resp.json())
.then(function(data){
    let badMovies = [];
    let bMSince2000 = [];
    let bM2000Titles = [];

    for(let i=0; i<data.length; i++){
        if(data[i].rating <= 5.0){
            badMovies.push(data[i]);
            if(data[i].year >= 2000){
                bMSince2000.push(data[i]);
                bM2000Titles.push(data[i].title);
            }
        }
    }

    console.log(badMovies);
    console.log(bMSince2000);
    console.log(bM2000Titles);

})
.catch(function(err){
    console.log(err);
})