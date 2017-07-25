const http = require('http');
const router = require('./router.js');
const port = 3000;


const server = http.createServer(router)

server.listen(port);
console.log(`server is running on local host:${port}`)

