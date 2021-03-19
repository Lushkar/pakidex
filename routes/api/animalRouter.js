const express = require('express');
const router = express.Router();
// The animal database
let Animals = require("../../models/animal.model")

/**
 * @baseURI - /api/animals
 */

 router.get('/', async (req, res) => {
    console.log(`Getting a new GET request`)
    let query = Animals.find({}, {}, {
        sort: {
            createdAt: -1
        }
    });

    
    query.exec((err, arties) => {
        if (!err)
            res.json(arties);
        else 
            console.error(err);
    })
})


router.get('/:id', async (req, res) => {
    console.log("Sending a single animal's info");
    let query = Animals.findById(req.params.id);
    query.exec((err, animal) => {
        if (!err)
            res.json(animal)
        else
            console.error(err)
    })
})

module.exports = router;