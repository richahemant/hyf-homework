//Homework Week 3

//Create a connection to the meal table in the mealsharing db

const sql = require('mysql');

let con = sql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "admin",
    "database": "mealsharing"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected to the Database as well....");
});

module.exports = con;

