// Learning how express works 
const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./auth')
const morgan = require('morgan')
// req => middleware => res

// app.use('/api', logger) ele se aplicará a todas as pagínas que vem depois de /api, por exemplo /api/products/user usará o logger em todas elas.

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')

})


app.listen(5000, () => {
    console.log('Listening');
})

