const express = require('express');
const mealsJSON = require('../data/meals.json');

const router = express.Router();



router.get('/meal', (req, res) => {
    let index = Math.floor(Math.random() * mealsJSON.length);
    console.log(`the index is ${index}`);
    let randomMeal = mealsJSON[index];
    res.json(randomMeal);
});

module.exports = router;
