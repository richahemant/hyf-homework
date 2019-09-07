
const express = require('express');
const mealRoutes = require('./routes/meals');
const largeMealRoutes = require('./routes/largeMeals.js');
const randomDishRoutes = require('./routes/randomMeal.js');

const reservationRoutes = require('./routes/reservations.js');
const randomReservationRoutes = require('./routes/randomReservation');

// Imports the express function from the express module imported above. 
// Unlike other modules, express directly exports the express() function.
const app = express();

app.get('/', function(req, res){
    res.send("<h1>This is the Home Page</h1>"
    + "<p><a href='/meals'>Get the entire Menu</a></p>"
    + "<p><a href='/meal'>Get a Random Meal Suggestion</a></p>"
    + "<p><a href='/largemeals'>Meals for Large Groups</a></p>"
    + "<p><a href='/reservations'>Get all our reservations Today</a></p>"
    + "<p><a href='/reservation'>Get a Random Reservation</a></p>");
    });
    

app.get('/meals', mealRoutes);

app.get('/largemeals', largeMealRoutes);

app.get('/meal', randomDishRoutes);

app.get('/reservations', reservationRoutes);

app.get('/reservation', randomReservationRoutes);

//404 Error Routines...
app.use(function(req, res, next) {
    return res.status(404).send("Unfortunately the page was not found");
  });



let server = app.listen(8080, function(){
    let host = server.address().address;
    let port = server.address().port;

    console.log(`You are now on ${host}:${port}`);
});

