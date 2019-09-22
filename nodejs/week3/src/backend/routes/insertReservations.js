const express = require('express');
const bodyparser = require('body-parser');
const con = require('../data/meals');

console.log("insert reservations called....");

const router = express.Router();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));


router.post('/api/reservations', function(req, res){
    console.log('Recieved a post request...');
    let newReservation = req.body;
    console.log(newReservation);
    con.query("insert into reservation SET ?", newReservation, function(err, result, query){
        if (err) throw err;
        res.redirect(303, '/api/reservations');
    });

});

module.exports = router;