
const express = require('express');
const mealsJSON = require('../data/meals.json');


const router = express.Router();

router.get('/meals', (req, res) => {
    res.json(mealsJSON);
});

module.exports = router;
