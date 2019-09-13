
const express = require('express');
const reservationsJSON = require('../data/reservations.json');
const router = express.Router();

router.get('/reservations', (req, res) => {
    res.json(reservationsJSON);
});

router.get('/reservations/:id', (req, res) => {
    const reservationsID = parseInt(req.params.id);
    let foundFlag = 0;
    for(i=0; i < reservationsJSON.length; i++){
        if(reservationsJSON[i].id === reservationsID){
            res.send(reservationsJSON[i]);
            foundFlag = 1;
        }
    }

    if(foundFlag === 0){
        res.send(`${reservationsID} not found...`);
    }
});

module.exports = router;
