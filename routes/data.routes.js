const express = require('express');
const { route } = require('./home.routes');
const router = express.Router()

router.get("/", function (req, res) {
    // Method 1
    // fs.readFile('data.json', function (err, data){
    //     console.log(data)
    //     res.write(data)
    //     res.end()
    // })
    // res.send(data)

    //Method 2
    // res.setHeader("Content-Type","application/json")
    // res.send(data)

    // method 3 - Express way
    res.json(data)
})

// router.post('/', function())

module.exports = router
