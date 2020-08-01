const express = require('express')
let router = express.Router()


router.get('/', (req, res) => {
    res.send("working as expected")
})

module.exports = router