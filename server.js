const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Configuração de CORS para permitir requisições do navegador
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Leitura do arquivo db.json
    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end(JSON.stringify({ mensagem: 'Erro interno ao ler o banco de dados.' }));
            return;
        }

        const db = JSON.parse(data);
        const urlPartes = req.url.split('/');

        // Rota: GET /aliens/:id
        if (urlPartes[1] === 'aliens' && urlPartes[2]) {
            const idBuscado = urlPartes[2];
            const alienEncontrado = db.aliens.find(a => a.id === idBuscado);

            if (alienEncontrado) {
                res.writeHead(200);
                res.end(JSON.stringify(alienEncontrado));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ mensagem: 'Alien não encontrado.' }));
            }
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ mensagem: 'Rota não encontrada.' }));
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor Node.js rodando em http://localhost:${PORT}`);
});