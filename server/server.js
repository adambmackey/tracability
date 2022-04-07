const express = require('express')
const path = require('path')

const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '7c342300cffb426e9a9111261232da32',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get('/say-hi', (req, res) => {
    res.send("well hello back")
    try{
        notAFunction(res)
    }catch(error){
        console.error(error)
    }
})

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const PORT = process.env.PORT || 4005 

app.listen(PORT, () => { console.log(`listening on ${PORT}`)})