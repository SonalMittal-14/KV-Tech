const ensureAuthenticated = require('../middleware/auth');

const router = require('express').Router()

router.get('/',ensureAuthenticated ,(req,res) => {
    console.log('---Logged in user ki detail', req.user);
    
    res.status(200).json([
        {
            name: "mobile",
            price: "100000"
        },
        {
            name: "tv",
            price:"6777777"
        }
    ])
});

module.exports = router