// Learning how express works 
const express = require('express')
const app = express()

const {products} = require('./data')


app.get('/', (req, res) => {
   // console.log('working');
    res.status(200).send('<h1>Home Page</h1><a href="/api/products">products</a>')

})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return {id, name, image}
    })
    res.json(newProducts)
})
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);

    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
       return res.status(200).send('Não encontramos o item desejado');
       // return res.status(200).json({success: true, data: []})
    }

   return res.status(200).json(sortedProducts)

})






app.listen(5000, () => {
    console.log('Listening');
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen