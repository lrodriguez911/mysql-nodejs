const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');


router.get('/', async (req, res, next) => {
    try {
        res.json(await programmingLanguages.getMultiple(req.query.page))
    } catch (err) {
            console.log(err);
            console.error(`This is error: ${err.message}`);
            next(err);
    }
})

module.exports = router