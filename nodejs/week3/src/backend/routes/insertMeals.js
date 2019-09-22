const express = require('express');
const bodyparser = require('body-parser');
const con = require('../data/meals');

console.log("insert meals called....");

const router = express.Router();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));


router.post('/api/meals', function(req, res){
    console.log('Recieved a post request...');
    let newMeal = req.body;
    console.log(newMeal);
    con.query("insert into meal SET ?", newMeal, function(err, result, query){
        if (err) throw err;
        res.redirect(303, '/api/meals');
    });

});

module.exports = router;