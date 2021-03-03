const express = require('express');
// const db = require('./models/db');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    console.log("Receiving a GET request");
    res.send('I got your GET request G');
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
