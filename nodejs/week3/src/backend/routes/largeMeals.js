const express = require('express');
const mealsJSON = require('../data/meals.json');

const router = express.Router();

router.get('/largemeals', (req, res) => {
    res.json(mealsJSON.filter(meal => {
        return meal.maxNumberOfGuests >= 4;
    }));
})

module.exports = router;