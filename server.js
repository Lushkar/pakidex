const express = require('express');
const db = require('./models/db');
const path = require('path');
const cors = require('cors');
const app = express();

let animalRouter = require("./routes/api/animalRouter");


app.use(express.json());
app.use(cors());
app.use('/api/animals', animalRouter)

// Adding Image paths
app.use("/images/primates", express.static(path.join(__dirname, '/images/primates')));
app.use(`images/carnivora`, express.static(path.join(__dirname, 'images/carnivora')));
// app.use(express.static(path.join(__dirname, `images`)));


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    console.log("Receiving a GET request");
    res.send('I got your GET request G');
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
