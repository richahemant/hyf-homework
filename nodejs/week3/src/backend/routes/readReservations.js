const express = require('express');

const router = express.Router();

const con = require('../data/meals');

router.get('/api/reservations/:id', function(req, res){
    let reservationID = req.params.id;
    let reservationQuery = `select * from reservation where reservation.id=${reservationID}`;

    con.query(reservationQuery, function(err, result){
        if(err) throw err;
        res.json(result);
    });

});


module.exports = router;