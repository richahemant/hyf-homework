const express = require('express');
const bodyparser = require('body-parser');
const con = require('../data/meals');

console.log("update reservations called....");

const router = express.Router();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));


router.put('/api/reservations/:id', function(req, res){
    console.log('Recieved a put request...');
    let reservationID = req.params.id;
    let newReservation = req.body;
    console.log(reservationID, newReservation);
    con.query(`update reservation set ? where reservation.id=${reservationID}`, newReservation, function(err, result, query){
        if (err) throw err;
        res.send(`${reservationID} updated...`);
    });

});

module.exports = router;