const HTTP = require('http');
const FS = require("fs");
const mesFonctions = require("./sendImages")

const hostname = '127.0.0.1';
const port = 3000;

const server = HTTP.createServer((req, res) => {
    console.log("nouvelle requete! ip: " + req.connection.remoteAddress);

    let reqUrl = req.url.split('/');

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
    else if (req.url == '/scripts/scripts.js') {
        res.writeHead(200, { 'Content-Type': 'text/js' });
        let jsFile = FS.readFileSync('./public/scripts/scripts.js');
        res.end(jsFile);
    }
    else if (true) {
        for (let i = 0; i < mesFonctions.mesImages.length; i++) {
            let path_2 = "./" + mesFonctions.mesImages[i]
            let path_1 = req.url
            console.log("avant: " + path_1)
            path_1 = path_1.slice(path_1.length - path_2.length + 1 , path_1.length)
            var path_3 = "." + path_1
            var path_4 = "public"
            path_4 += req.url
            console.log("apres: " +path_3)
            console.log("2eme: " + path_2)
            
            if (path_3 == path_2) {
                console.log("réussi")
                // remplace le / de début par un ./ pour ne pas chercher à la racine du système de fichier
                // let test = './public/Images/'
                // test += path_2
                console.log(path_1)
                const image = FS.readFileSync(path_4);
                console.log(image)

                res.writeHead(200, { 'Content-Type': 'image/img' });
                res.end(image);
            }
        }
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("PIIIIINEEEEED");
    }
    console.log("exit")
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});