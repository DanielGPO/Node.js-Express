// Learning how express works 
const express = require('express')
const app = express()
let { people } = require('./data')

app.get('/api/people', (req, res) => {
    res.status(200).json({succes: true, data: people})
})


app.listen(5000, () => {
    console.log('Listening');
})

