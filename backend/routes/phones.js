const express = require('express');
const router = express.Router();
const phones = require('../../phones.json');

router.get('/telefonos', (req, res, next) => {
    res.send(phones)
});
module.exports = router;