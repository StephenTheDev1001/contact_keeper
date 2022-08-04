const express = require('express')
const router = express.Router()


// @route   POST api/users
// @desc    register new user
// @access  Public
router.post('/', (req, res) => {
    res.send('Register new user')
})

module.exports = router