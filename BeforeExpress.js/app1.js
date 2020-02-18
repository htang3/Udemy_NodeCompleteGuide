const http = require('http');
const routes = require('./routes1');

console.log(routes.sometext);
const server = http.createServer(routes.request);
server.listen(3000);