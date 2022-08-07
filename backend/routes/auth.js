const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//Create a user using : POST "/api/auth/", Dosent require Auth

router.get('/', [
    body('name', 'Enter a valid name').isLength({ min: 4 }),
    body('email', 'Please enter a valid mail').isLength({ min: 3 }),
    body('password', 'Enter a valid password with atleast 5 Character').isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user))
        .catch(err => {
            console.log(err)
            res.json({ error: 'Please enter a unique value for email', message: err.message })
        })
})

module.exports = router