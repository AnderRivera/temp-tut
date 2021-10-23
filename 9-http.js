const http = require('http') ;
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our page');
    }
    if(req.url === '/about') {
        res.end('Welcome to about');
    }
    res.end(`
        <h1>Oops!!</h1>
    `)
})

server.listen(5000);