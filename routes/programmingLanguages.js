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
router.put('/', async (req, res, next) => {
    try {
        res.json(await programmingLanguages.update(req.body.id, req.body))
    } catch (err) {
            console.error(`This is error: ${err.message}`);
            next(err);
    }
})
router.delete('/', async (req, res, next) => {
    try {
        res.json(await programmingLanguages.deleteDb(req.query.id))
    } catch (err) {
            console.error(`This is error: ${err.message}`);
            next(err);
    }
})

module.exports = router;