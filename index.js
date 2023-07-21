const http = require('http');

const routes = require('./routes')
//we can only read the route file from here we can't modify it from outside

// console.log(routes.someText);
const server = http.createServer(routes);
server.listen(4000);


