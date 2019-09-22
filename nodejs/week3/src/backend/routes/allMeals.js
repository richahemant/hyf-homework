const express = require('express');
const bodyparser = require('body-parser');
const con = require('../data/meals');

const router = express.Router();

router.use(bodyparser.urlencoded({extended: false}));
router.use(bodyparser.json());

router.get('/api/meals', function(req, res){

    let mealQuery = "select * from meal";
    let mealsJSON;

    new Promise(function(resolve, reject){
        con.query(mealQuery, function(err, result){
            if (err){
                reject(err);
            } else{
                resolve(result);
            }
        });

    }).then((mealsJSON) => {
        let query = req.query;
    console.log(query);
    

    if(Object.getOwnPropertyNames(query).length === 0){
        //Check if no meal query parameters are provided ie. http://localhost:3000/meals
        res.json(mealsJSON);
    } else if(query.maxPrice != undefined){
        //if Max Price is defined in the query parameter. ie. http://localhost:3000/meals?maxPrice=100
        //We will output all meals cheaper than the maxPrice
        let cheapMeals = [];
        let maxPrice = parseFloat(query.maxPrice);
        console.log(maxPrice);

        for(i=0; i<mealsJSON.length; i++){
            if(mealsJSON[i].price < maxPrice){
                cheapMeals.push(mealsJSON[i]);
            }
        }
        
        res.json(cheapMeals);
    
    } else if(query.description != undefined){
        //For searching a given string in the meal descriptions 
        //http://localhost:3000/meals?description=Indian
        let matchList = [];
        let queryString = query.description.toLowerCase();

        for(i=0; i<mealsJSON.length; i++){
            if(mealsJSON[i].description.toLowerCase().indexOf(queryString) != -1){
                matchList.push(mealsJSON[i]);
            }
        }
        res.send(matchList);

        } else if(query.createdAfter != undefined){
        let queryDate = Date.parse(query.createdAfter);
        console.log(queryDate);
        let matchList = [];

        for(i=0; i<mealsJSON.length; i++){
            let mealCreationDate = Date.parse(mealsJSON[i].createdAt);
            if(mealCreationDate >= queryDate ){
                matchList.push(mealsJSON[i]);
            }
        }

        res.send(matchList);
        } else if(query.limit != undefined){
        //For showing only a limited number of meals
        //http://localhost:3000/meals?limit=2
        let mealList = [];

        for(i=0; i<parseInt(query.limit); i++){
            mealList.push(mealsJSON[i]);
        }

        res.send(mealList);
        } else{
        res.send("We did not recognize the query..");
        }

    }
    );
    
    

    //console.log(mealsJSON);

    

});

router.post('/api/meals', function(req, res){
    let newMeal = req.body;

    con.query("insert into meal set ? ", newMeal, function(err, result){
        res.send('New Meal inserted....');
    });

})

module.exports = router;
