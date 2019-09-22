const express = require('express');

const router = express.Router();

const con = require('../data/meals');

router.get('/api/meals/:id', function(req, res){
    let mealID = req.params.id;
    let mealQuery = `select * from meal where meal.id=${mealID}`;

    con.query(mealQuery, function(err, result){
        if(err) throw err;
        res.json(result);
    });

});


module.exports = router;