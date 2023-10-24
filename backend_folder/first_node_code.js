console.log("hello world");
const http = require("http");

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello World !!');
}).listen(5000);

console.log('server is running  at port 5000');
// i am not clear what is the question, took help of w3schools
