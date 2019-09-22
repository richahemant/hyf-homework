
const express = require('express');
const mealRoutes = require('./routes/meals');
const largeMealRoutes = require('./routes/largeMeals.js');
const randomDishRoutes = require('./routes/randomMeal.js');
const reservationRoutes = require('./routes/reservations.js');
const randomReservationRoutes = require('./routes/randomReservation');
const reviewsRoute = require('./routes/reviews.js');

//Home Work Week 3....
const allMeals = require('./routes/allMeals.js');
const readMeals = require('./routes/readMeals');
const insertMeals = require('./routes/insertMeals');
const updateMeals = require('./routes/updateMeals');
const deleteMeals = require('./routes/deleteMeals');

const allReservations = require('./routes/allReservations');
const readReservations = require('./routes/readReservations');
const insertReservations = require('./routes/insertReservations');
const updateReservations = require('./routes/updateReservations');
const deleteReservations = require('./routes/deleteReservations');

// Imports the express function from the express module imported above. 
// Unlike other modules, express directly exports the express() function.
const app = express();


//Working with Middleware
app.use(function(req, res, next){
    let timeOfQuery = `Query at ${Date.now()}: ${req.originalUrl}`;
    console.log(timeOfQuery);
    next();
});

app.get('/', function(req, res){
    res.send("<h1>This is the Home Page</h1>"
    + "<p><a href='/meals'>Get the entire Menu</a></p>"
    + "<p><a href='/meal'>Get a Random Meal Suggestion</a></p>"
    + "<p><a href='/largemeals'>Meals for Large Groups</a></p>"
    + "<p><a href='/reservations'>Get all our reservations Today</a></p>"
    + "<p><a href='/reservation'>Get a Random Reservation</a></p>");
    });
    

app.get('/meals', mealRoutes);

app.get('/meals/:id', mealRoutes);

app.get('/largemeals', largeMealRoutes);

app.get('/meal', randomDishRoutes);

app.get('/reservations', reservationRoutes);

app.get('/reservations/:id', reservationRoutes);

app.get('/reservation', randomReservationRoutes);

app.get('/reviews', reviewsRoute);

app.get('/reviews/:id', reviewsRoute);


// Homework Week 3...
app.get('/api/meals', allMeals);
app.post('/api/meals', insertMeals);
app.get('/api/meals/:id', readMeals);
app.put('/api/meals/:id', updateMeals);
app.delete('/api/meals/:id', deleteMeals);

app.get('/api/reservations', allReservations);
app.post('/api/reservations', insertReservations);
app.get('/api/reservations/:id', readReservations);
app.put('/api/reservations/:id', updateReservations);
app.delete('/api/reservations/:id', deleteReservations);




//404 Error Routines...
app.use(function(req, res, next) {
    return res.status(404).send("Unfortunately the page was not found");
  });

let server = app.listen(3000, function(){
    console.log(`You are now on port 3000`);
});
