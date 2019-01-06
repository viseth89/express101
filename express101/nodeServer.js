const http = require('http');

// the http module has a createServer mehtod
// takes 1 arg:
// 1. callback, callback, has 2 args: req, res

const server = http.createServer((req, res) => {
    console.log(req)
    //res = our way of responding to the requester
    // http message 
    // 1. start-line (node takes care of)
    // 2. header??
    // 3. body 
    // writeHead takes 2 args:
    // 1. status Code
    // 2. object for the mime-typeof
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Hello, World1!</h1>')
    res.end();
    console.log('viseth')
})

//createServer returns an object with a listen method
// listen takes 1 arg:
// 1. port to listen for http traffic on 65000 ports available

server.listen(3000)