const http = require('http');

const routes = require('./allRoutes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(4000);

// note -> here it didn't automatically created message.txt file, i had to make it manually
