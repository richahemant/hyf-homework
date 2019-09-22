const express = require('express');
const router = express.Router();

const con = require('../data/meals');



router.get("/api/reservations", function(req, res){

    let resQuery = 'select * from reservation';

    con.query(resQuery, function(err, result){
        if (err) throw err;
        res.json(result);
    });

})

module.exports = router;
