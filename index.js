const http = require('http')

// req is the incoming request and res is what we are sending back

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Home Page')
        
    }
    if (req.url === '/about') {
        res.end('Why are you so interested about us hm? hm?')
    }
    res.end('<h1>Oops Sorry</h1>')
})
console.log('hi there')
server.listen(5000)
// cria um server e mostra 'welcome to our page'