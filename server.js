const HTTP = require('http');
const FS = require("fs");
const mesFonctions = require("./sendImages")

const hostname = '127.0.0.1';
const port = 3000;

const server = HTTP.createServer((req, res) => {
    console.log("nouvelle requete! ip: " + req.connection.remoteAddress);

    for (let i = 0; i < mesFonctions.mesImages.length; i++) {
        var path_2 = "./" + mesFonctions.mesImages[i];
        var path_1 = req.url;
        path_1 = path_1.slice(path_1.length - path_2.length + 1 , path_1.length);
        path_1 = "." + path_1;
        var path_3 = req.url;
    }
    console.log(path_1)
    console.log(path_2)
    console.log(req.url)

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let accueil = FS.readFileSync('./public/index.html');
        res.end(accueil);
    }
    else if (req.url == '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let accueil = FS.readFileSync('./public/index.html');
        res.end(accueil);
    }
    else if (req.url == '/chambres.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let chambres = FS.readFileSync('./public/chambres.html');
        res.end(chambres);
    }
    else if (req.url == '/contact.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let contact = FS.readFileSync('./public/contact.html');
        res.end(contact);
    }
    else if (req.url == '/styles/style_accueil.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        let cssFile = FS.readFileSync('./public/styles/style_accueil.css');
        res.end(cssFile);
    }
    else if (req.url == '/styles/style_chambres.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        let cssFile = FS.readFileSync('./public/styles/style_chambres.css');
        res.end(cssFile);
    }
    else if (req.url == '/styles/style_contact.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        let cssFile = FS.readFileSync('./public/styles/style_contact.css');
        res.end(cssFile);
    }
    else if (req.url == '/style_page_404.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        let cssFile = FS.readFileSync('./public/styles/style_page_404.css');
        res.end(cssFile);
    }
    else if (req.url == '/scripts/scripts.js') {
        res.writeHead(200, { 'Content-Type': 'text/js' });
        let jsFile = FS.readFileSync('./public/scripts/scripts.js');
        res.end(jsFile);
    }
    else if (path_1 == path_2) {
        const image = FS.readFileSync(path_3);
        res.writeHead(200, { 'Content-Type': 'image/img' });
        res.end(image);
    }
    else if (req.url == 'public/') {
        res.writeHead(404, { 'Content-Type': 'text/html'})
        let error_404 = FS.readFileSync('./public/page_404.html');
        res.end(error_404);
    }
    else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    let error_404 = FS.readFileSync('./public/page_404.html');
    res.end(error_404);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});