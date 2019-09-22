const express = require('express');

const router = express.Router();

const con = require('../data/meals');

router.delete('/api/meals/:id', function(req, res){
    let mealID = req.params.id;
    let mealQuery = `delete from meal where meal.id=${mealID}`;

    con.query(mealQuery, function(err, result){
        if(err) throw err;
        res.send(`Meal ID ${mealID} deleted...`);
    });

});


module.exports = router;