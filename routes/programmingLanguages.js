const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');


router.get('/', async (req, res, next) => {
    try {
        res.json(await programmingLanguages.read(req.query.page))
    } catch (err) {
            console.error(`This is error: ${err.message}`);
            next(err);
    }
})
router.post('/', async (req, res, next) => {
    try {
        res.json(await programmingLanguages.create(req.body))
    } catch (err) {
            console.error(`This is error: ${err.message}`);
            next(err);
    }
})

module.exports = router;