const express = require ('express');
const reviewsJSON = require ('../data/reviews.json');
const router = express.Router();

router.get('/reviews', (req, res) => {
    res.json(reviewsJSON);
});

router.get('/reviews/:id', (req, res) => {
    const reviewsID = parseInt(req.params.id);
    let foundFlag = 'Not found';
    
    for(i=0; i < reviewsJSON.length; i++){
        if(reviewsJSON[i].id === reviewsID){
            res.send(reviewsJSON[i]);
            foundFlag = 'Found';
        }
    }

    if(foundFlag === 'Not found'){
        res.send(`${reviewsID} not found...`);
    }
});

module.exports = router;