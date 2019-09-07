
const express = require('express');
const reservationsJSON = require('../data/reservations.json');


const router = express.Router();

router.get('/reservations', (req, res) => {
    res.json(reservationsJSON);
});

module.exports = router;
