const express = require('express');
const app = express();

app.get('/calculator/multiply', (req, res)=>{

    //console.log(req.query);

    let queryArray = [];

    for (const key in req.query){
        let arrayNum = Number(req.query[key]);
        queryArray.push(arrayNum);
    }

    //console.log(queryArray);

    let product = 1;
    for(let i=0; i<queryArray.length; i++)
        product = product * queryArray[i];

    console.log(product);
    
    res.send(`We recieved the numbers ${queryArray}. The Product of these is ${product}`);

});

app.get('/calculator/add', (req, res)=>{

    //console.log(req.query);

    let queryArray = [];

    for (const key in req.query){
        let arrayNum = Number(req.query[key]);
        queryArray.push(arrayNum);
    }

    //console.log(queryArray);

    let sum = 0;
    for(let i=0; i<queryArray.length; i++)
        sum = sum + queryArray[i];

    console.log(sum);
    
    res.send(`We recieved the numbers ${queryArray}. The Sum of these is ${sum}`);

});

app.get('/calculator/substract', (req, res)=>{

    //console.log(req.query);

    let queryArray = [];

    for (const key in req.query){
        let arrayNum = Number(req.query[key]);
        queryArray.push(arrayNum);
    }

    //console.log(queryArray);

    let sum = queryArray[0];
    for(let i=1; i<queryArray.length; i++)
        sum = sum - queryArray[i];

    console.log(sum);
    
    res.send(`We recieved the numbers ${queryArray}. The difference of these is ${sum}`);

});

app.get('/calculator/divide', (req, res)=>{

    //console.log(req.query);

    let queryArray = [];

    for (const key in req.query){
        let arrayNum = Number(req.query[key]);
        queryArray.push(arrayNum);
    }

    //console.log(queryArray);

    let product = queryArray[0];
    for(let i=1; i<queryArray.length; i++)
        product = product / queryArray[i];

    console.log(product);
    
    res.send(`We recieved the numbers ${queryArray}. The division of these is ${product}`);

});

app.listen(3003,  function(){
    console.log ('You are now on port 3003');
});
