const express = require('express');
const app = express();
const port = 4001;

const drinkModels = require('./models/drinks.js');
const foodModels = require('./models/food.js');
const drinks = drinkModels.drinks
const foods = foodModels.food

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

app.get('/foods', (req, res) => {
    let capFoods = [];
    foods.forEach(food => {
        capFoods.push(food.name.charAt(0).toUpperCase() + food.name.slice(1))
    })
    res.render('food_index.ejs', {capFoods});
});

app.get('/foods/:id', (req, res) => {
    const foodItems = foods[req.params.id];
    res.render('food_show.ejs', {food: foodItems});
});

app.listen(port, () => {
    console.log(`🏝️ Server is listening to PORT ${port} 🎧`)
});