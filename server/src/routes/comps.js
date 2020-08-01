const express = require('express')
let router = express.Router()


router.get('/', (req, res) => {
    // * some process to retrieve a person's competencies*
    const result = {
        title: "Demonstrate yada yada proficiency stuff",
        id: 5,
        criteria: [
            "Demonstrate this stuff with this thing", 
            "Understand how to do this and that",
            "This third thing you should know"
        ]
    }

    res.json(result)
})

module.exports = router