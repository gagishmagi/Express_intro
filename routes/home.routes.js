const express = require('express')
const router = express.Router()
const fs = require("fs")

// json data
const data = require("../data.json")


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


router.post('/', function (req, res) {

    let content = ''

    console.log(req.body)

    const username = req.body.username
    const age = req.body.age

    data.users.push({
        username,
        age
    })

    content = JSON.stringify(data)

    fs.writeFile('data.json', content, function (err, data) {
        if (err) {
            console.log(err)
            // return res.json(400, {message: "something went wrong"})
        }
        // res.json(200,{message: "OK"})
        res.redirect('/')
    })


})

module.exports = router
