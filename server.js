const express = require('express');
const app = express();
const port = 4001;

const models = require('./models/Drinks.js');
const drinks = models.drinks

app.get('/', (req, res) => {
    res.send ('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs');
});

app.listen(port, () => {
    console.log(`🏝️ Server is listening to PORT ${port} 🎧`)
});