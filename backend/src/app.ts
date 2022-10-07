const http = require('http');
const fs = require('fs');
const path = require('path');
import { IncomingMessage, ServerResponse } from 'http';
import { getContentType } from './filesUtils';

const port = 3000;
const hostname = 'localhost';

const dummyData = [{                                                                                  
                    "title": "Calculadora com graficos 3D",                                        
                    "content": `O livro do maluco ja me ajudou 't <img src="https://i.imgur.com/WlIyo8Z.png" alt="Picture of anime">`,
                        "categories": ['typeorm', 'vuejs', 'python'],                              
                    "brief":'Vocẽ pode jogar com un el nino',                   
                    "video": 'https://www.youtube.com/watch?v=9gXtkG8jOHY',                        
                    "id": 1,                                                                       
                    lang:'pt'
                }, 
                { 
                    "title": "Robot mecho",
                    "content": `It was quite hard wasn't <img src="https://i.imgur.com/WlIyo8Z.png"alt="Picture of anime">`,
                        "categories": ['typeorm', 'vuejs', 'python'],
                    "brief":'Game that has robots and stuff allows bla bla',
                    "video": 'https://www.youtube.com/watch?v=9gXtkG8jOHY',
                    lang:'en',
                    id:2
                }]

const server = http.createServer((req:IncomingMessage, res:ServerResponse) =>{
    
    let filePath = path.join(__dirname, 'frontend', req.url === '/' ? 'index.html': req.url)
    let extname = path.extname(filePath);
    let contentType = getContentType(extname);

    if (req.method === 'GET'){

        if (req.url === '/api/v1/projects'){
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(dummyData));
            return
        }

        else if( /^\/api\/v1\/project\/[0-9]+$/.test(req.url as string) ){
            const basePath = '/api/v1/project/'
            let projectId:string|number = (req.url as string).slice(basePath.length);
            projectId = Number(projectId);
           
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(dummyData.find((element) => {return element.id == projectId})));
            
            return
        }
        else {
            fs.readFile(filePath, (err:NodeJS.ErrnoException, data:Buffer)=>{
                if (err) {
                    if (err.code === 'ENOENT'){
                        res.writeHead(200 , {'Content-Type':'application/json'})
                        res.end('Not found')
                        return
                    }
                    throw err;
                }

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
