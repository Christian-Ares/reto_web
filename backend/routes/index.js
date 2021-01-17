const express = require('express');
const router = express.Router();

//RUta para la página principal.

router.get('/', (req, res, next) => {
    res.render('index')
});

module.exports = router;