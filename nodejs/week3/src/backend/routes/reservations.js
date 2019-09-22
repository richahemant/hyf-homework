
const express = require('express');
const reservationsJSON = require('../data/reservations.json');
const router = express.Router();

router.get('/reservations', (req, res) => {
    res.json(reservationsJSON);
});

router.get('/reservations/:id', (req, res) => { // bcos :id is hard-coded as a parameter..anything that comes there will be an id only..nothing else
    const reservationsID = parseInt(req.params.id);
    let foundFlag = 'Not found';
    for(i=0; i < reservationsJSON.length; i++){
        if(reservationsJSON[i].id === reservationsID){
            res.send(reservationsJSON[i]);
            foundFlag = 'Found';
        }
    }

    if(foundFlag === 0){
        res.send(`${reservationsID} not found...`);
    }
});

module.exports = router;