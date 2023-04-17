const http = require('http');

const server = http.createServer((requisition, resolution) => {
    console.log(requisition.method);
    console.log(requisition.url);
    resolution.statusCode = 200;
    resolution.end('<h1>Helloworld</h1>');
});

server.listen(3000, () => {
    console.log('Servidor Ativo');
});