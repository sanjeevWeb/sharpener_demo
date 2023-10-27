const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        const fileData = fs.readFileSync('message.txt', 'utf-8');
        console.log(fileData);
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(`<body><h2>${fileData}</h2>`);
        res.write(
            `<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
        );
        res.write('</html>');
        return res.end();

    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // console.log(message)
            fs.writeFile('message.txt', message, err => {
                // fileData = message.toString();
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }


    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);
