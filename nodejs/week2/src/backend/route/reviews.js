const express = require ('express');
const reviewsJSON = require ('../data/reviews.json');
const router = express.Router();

router.get('/reviews', (req, res) => {
    res.json(reviewsJSON);
});

router.get('/reviews/:id', (req, res) => {
    const reviewsID = parseInt(req.params.id);
    let foundFlag = 0;
    
    for(i=0; i < reviewsJSON.length; i++){
        if(reviewsJSON[i].id === reviewsID){
            res.send(reviewsJSON[i]);
            foundFlag = 1;
        }
    }

    if(foundFlag === 0){
        res.send(`${reviewsID} not found...`);
    }
});

module.exports = router;
