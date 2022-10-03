const http = require('http');
const fs = require('fs');
const path = require('path');
import { IncomingMessage, ServerResponse } from 'http';
import { getContentType } from './filesUtils';

const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req:IncomingMessage, res:ServerResponse) =>{
    
    let filePath = path.join(__dirname, 'frontend', req.url === '/' ? 'index.html': req.url)
    let extname = path.extname(filePath);
    let contentType = getContentType(extname);

    if (req.method === 'GET'){

        if (req.url === '/api/v1/test'){
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify({'success':'up and working'}));
            return
        }

        else {
            fs.readFile(filePath, (err:NodeJS.ErrnoException, data:Buffer)=>{
                if (err) throw err;

                res.writeHead(200, {'Content-Type':contentType});
                res.end(data)
            })
        }
    }
    if (req.method === 'POST'){
       res.end() 
    }
    if (req.method === 'PUT'){
        res.end()
    }

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
