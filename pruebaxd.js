const http = require('http');

const servidor = http.serverCreate ((req, res) => {
    res.end('JEJE xd');
});

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
    console.log('tranquila rosi ta todo bien x"d');
});