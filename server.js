const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require('morgan')
const https = require('https')
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    next();
  });

// app.get('/', (req,res) => {
//     res.send('Hello World')
// });

app.use(morgan('dev'));

app.use("/listUser", require("./src/controller"))

app.listen(port, () => console.log('server started on port', port))

// app.listen(port, () => {
//     console.log("Listening...")
// })

