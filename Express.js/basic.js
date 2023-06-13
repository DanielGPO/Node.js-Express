const express = require('express');
const app = express();
const { products } = require('./data.js')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProduct = products.find(
        (product) => product.id === Number(productID))
    
    if (!singleProduct) {
        return res.status(404).send('Produto não encontrado, foi mal.')
    }

    return res.json(singleProduct)
})
app.listen(5000, () => {
    console.log('Listening to port 5000...');
})