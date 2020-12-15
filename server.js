const HTTP = require('http');
const FS = require("fs");
const mesFonctions = require("./sendImages");
const { transcode } = require('buffer');

const hostname = '127.0.0.1';
const port = 3000;

var transfert_images = 0

const server = HTTP.createServer((req, res) => {
    console.log("nouvelle requete! ip: " + req.connection.remoteAddress);


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
    else if (transfert_images == 0) {
        for (let i = 0; i < mesFonctions.mesImages.length; i++) {
            let path_1 = req.url
            let path_2 = "./" + mesFonctions.mesImages[i];
            path_1 = path_1.slice(path_1.length - path_2.length + 1 , path_1.length)
            path_1 = "." + path_1
            var path_3 = "./public"
            path_3 += req.url
            
            if (path_1 == path_2) {
                const image = FS.readFileSync(path_3);
                console.log(image)

                res.writeHead(200, { 'Content-Type': 'image/img' });
                res.end(image);
            }
        }
        transfert_images = 1
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