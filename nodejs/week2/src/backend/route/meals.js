
const express = require('express');
const mealsJSON = require('../data/meals.json');

const router = express.Router();

router.get('/meals', (req, res) => {
    
    let q = req.query;
    console.log(q);
    
    if(Object.getOwnPropertyNames(q).length === 0){
        //Check if no meal query parameters are provided ie. http://localhost:3000/meals
        res.json(mealsJSON);
    } else if(q.maxPrice != undefined){
        //if Max Price is defined in the query parameter. ie. http://localhost:3000/meals?maxPrice=100
        //We will output all meals cheaper than the maxPrice
        let cheapMeals = [];
        let maxPrice = parseFloat(q.maxPrice);
        console.log(maxPrice);

        for(i=0; i<mealsJSON.length; i++){
            if(mealsJSON[i].price < maxPrice){
                cheapMeals.push(mealsJSON[i]);
            }
        }
        
        res.json(cheapMeals);
    
    } else if(q.title != undefined){
        //For searching a given string in the meal titles
        //http://localhost:3000/meals?title=Indian
        let matchList = [];
        let queryString = q.title.toLowerCase();

        for(i=0; i<mealsJSON.length; i++){
            if(mealsJSON[i].title.toLowerCase().indexOf(queryString) != -1){
                matchList.push(mealsJSON[i]);
            }
        }
        res.send(matchList);

    } else if(q.createdAfter != undefined){
        let queryDate = Date.parse(q.createdAfter);
        console.log(queryDate);
        let matchList = [];

        for(i=0; i<mealsJSON.length; i++){
            let mealCreationDate = Date.parse(mealsJSON[i].createdAt);
            if(mealCreationDate >= queryDate ){
                matchList.push(mealsJSON[i]);
            }
        }

        res.send(matchList);
    } else if(q.limit != undefined){
        //For showing only a limited number of meals
        //http://localhost:3000/meals?limit=2
        let mealList = [];

        for(i=0; i<parseInt(q.limit); i++){
            mealList.push(mealsJSON[i]);
        }

        res.send(mealList);
    } else{
        res.send("We did not recognize the query..");
    }
    
});

router.get('/meals/:id', function(req, res){
    const mealID = parseInt(req.params.id);
    let foundFlag = 0;
    for(i=0; i<mealsJSON.length; i++){
        if(mealsJSON[i].id === mealID){
            res.send(mealsJSON[i]);
            foundFlag = 1;
        }
    }

    if(foundFlag === 0){
        res.send(`${mealID} not found...`);
    }
})

module.exports = router;
