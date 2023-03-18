const express = require('express');
const app = express();
const port = 4001;


app.get('/', (req, res) => {
    res.send ('Welcome to the Gitpub App!');
})

app.listen(port, () => {
    console.log(`🏝️ Server is listening to PORT ${port} 🎧`)
})