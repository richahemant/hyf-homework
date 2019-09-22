const express = require('express');
const bodyparser = require('body-parser');
const con = require('../data/meals');

console.log("update meals called....");

const router = express.Router();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));


router.put('/api/meals/:id', function(req, res){
    console.log('Recieved a put request...');
    let mealID = req.params.id;
    let newMeal = req.body;
    console.log(mealID, newMeal);
    con.query(`update meal set ? where meal.id=${mealID}`, newMeal, function(err, result, query){
        if (err) throw err;
        res.send(`${mealID} updated...`);
    });

});

module.exports = router;