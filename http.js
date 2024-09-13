const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/') {
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write('<div>Home</div>')
        res.end();
    } else if(req.url === '/about'){
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.write('<div>About</div>');
        res.end();
    } else if(req.url === '/services'){
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.write('<div>services</div>');
        res.end();
    } else if(req.url === '/contact'){
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.write('<div>contact</div>')
        res.end();
    } else{
        res.writeHead(404,{'content-Type' : 'text/html'})
        res.end('Error 404');
    }
})
server.listen(5000, () =>{
    console.log('port is listing @ 5000')
})