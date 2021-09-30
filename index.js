// Include express for web handling
const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req,res) => {
    res.send("Unauthorized endpoint!");
});

// Define the the Honda API endpoint
app.get('/api/honda', (req,res) => {
    res.send(hondaAPIHandler());
});

// Define the the Mazda API endpoint
app.get('/api/mazda', (req,res) => {
    res.send(mazdaAPIHandler());
});

// Listen on the pre-defined port
app.listen(port, () => {
    console.log("Listening on port: ", port);
});

/**
 * Returns the data requested for the Honda API call.
 * @return {Array} List of Honda models.
 */
function hondaAPIHandler(){
    // TODO: Add functionality.
}

/**
 * Returns the data requested for the Mazda API call.
 * @return {Array} List of Mazda models.
 */
function mazdaAPIHandler(){
    // TODO: Add functionality.
}