export function getContentType(extname:string){
    let contentType = 'text/html'

    switch(extname) {
        case '.js':
            contentType = 'text/javascript';

        break;

        case '.html':
            contentType = 'text/html';

        break;

        case '.css':
            contentType = 'text/css';

        break;

        case '.json':
            contentType = 'application/json';

        break;

        case '.png':
            contentType = 'image/png';
        break;

        case '.jpg':
            contentType = 'image/jpg';
        break;

        case '.otf':
            contentType = 'application/x-font-opentype';
        break;

        case '.svg':
            contentType = 'image/svg+xml'
    }

    return contentType
}
