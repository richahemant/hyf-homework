
const express = require('express');
const reservationsJSON = require('../data/reservations.json');


const router = express.Router();



router.get('/reservation', (req, res) => {
    let index = Math.floor(Math.random() * reservationsJSON.length);
    res.json(reservationsJSON[index]);
});

module.exports = router;