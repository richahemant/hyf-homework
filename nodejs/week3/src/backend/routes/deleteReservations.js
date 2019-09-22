const express = require('express');

const router = express.Router();

const con = require('../data/meals');

router.delete('/api/reservations/:id', function(req, res){
    let reservationID = req.params.id;
    let reservationQuery = `delete from reservation where reservation.id=${reservationID}`;

    con.query(reservationQuery, function(err, result){
        if(err) throw err;
        res.send(`Reservation ID ${reservationID} deleted...`);
    });

});


module.exports = router;