const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080;
const fs = require("fs")
const bodyParser = require("body-parser")
const path = require("path")

// json data
const data = require("./data.json")


// middlewares
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// our routes files
const homeRoutes = require("./routes/home.routes")
const puppiesRoutes = require("./routes/puppies.routes")
const contactRoutes = require("./routes/contact.routes")
const dataRoutes = require("./routes/data.routes")

// router middleware
app.use('/', homeRoutes);
app.use('/Puppies', puppiesRoutes);
app.use('/Contact', contactRoutes);
app.use('/data.json', dataRoutes)


app.listen(PORT)
console.log(`Server is running on port ${PORT}`)
