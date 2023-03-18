const express = require('express');
const app = express();
const port = 4001;

const models = require('./models/Drinks.js');
const drinks = models.drinks

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send ('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
    let capDrinks = [];
    drinks.forEach(drink => {
        capDrinks.push(drink.name.charAt(0).toUpperCase() + drink.name.slice(1))
    })
    res.render('drinks_index.ejs', {capDrinks});
});

app.get('/drinks/:id', (req, res) => {
    const drink = drinks[req.params.id];
    res.render('drinks_show.ejs', {drinks: drink});
});

app.listen(port, () => {
    console.log(`🏝️ Server is listening to PORT ${port} 🎧`)
});