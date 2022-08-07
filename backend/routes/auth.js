const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        a: 'Atul',
        number: 22
    }

    res.json(obj)
})

module.exports = router