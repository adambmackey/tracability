const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const PORT = process.env.PORT || 4005 

app.listen(PORT, () => { console.log(`listening on ${PORT}`)})