const express = require('express');
const router = express.Router();
let Article = require("../../models/animal.model")

/**
 * @baseURI - /api/articles
 */
 router.get('/', async (req, res) => {
    console.log(`Getting a new GET request`)
    let query = Article.find({}, {}, {
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

module.exports = router;