const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..','public', 'puppies.html'))
})

router.post('/', function (req, res) {
    res.json({message: "Puppies are OK"})
})

module.exports = router
