//ouvrez le terminal et tapez "npm install" pour automatiquement installer les modules requis (remedial et query-string)
const Http = require('http');

//le module url permet d'extraire l'url sans prendre la querystring
const Url = require('url');
const Fs = require('fs');
const Remedial = require("remedial");
const BodyParser = require("body-parser");


// Mes fonctions persos

//recuperation des images du fichier senddImages.js
const mesFonctions = require("./sendImages");
//recuperation des images du fichier senddImages.js
const sendMail = require('./mail')
//simplification du console.log()
const log = console.log


//le module query-string permet de transformer la querystring en objet
//ex : ?login=toto&mdp=titi => {login:"toto", mdp: "titi"}
const QueryString = require("query-string");

const server = Http.createServer(function (req, res) {
    let url = Url.parse(req.url).pathname;
    log("Debut requete sur " + url);

    //la methode routeur s'occupe de toutes les requetes
    routeur(url, req, res);
});

const HOSTNAME = "127.0.0.1";
const PORT = 5000;

server.listen(PORT, HOSTNAME, () => {
    log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

function routeur(url, req, res) {

    //decoupage de l'url selon les / en un tableau
    let routeArray = url.split('/');
    log("routing on url : " + (typeof url));
    log(routeArray);

    //premier element apres le / ex: /styles/style.css => styles
    let folder = routeArray[1];

    //deuxieme element apres le / ex: '/styles/style.css' => 'style.css'
    //si l'url est du style '/blabla/truc' sans extension 
    //alors on rajouter .html plus loin => '/blabla/truc.html' (plus joli)
    let fileName = routeArray[2] || false;

    //www.google.com/toto/?

    let query = false;
    if (req.url.includes("?")) {

        //si l'url a un "?" la methode get a ete utilise et on veux recuperer la querystring
        //on decoupe l'url au niveau du ? et on interprete la querystring comme un objet js grace au module query-string 
        query = QueryString.parse(req.url.substr(req.url.indexOf("?")));
    }

    //file va stocker le fichier a renvoyer
    let file;

    //cas particulier ou l'URL vaut : '/' --> Page d'accueil
    let shouldEnd = true;
    if (folder === '' || folder === 'index.html') {
        res.statusCode = 200;

        file = Fs.readFileSync('./public/views/index.html');

    } else if (folder === 'chambres.html') {
        res.statusCode = 200;

        file = Fs.readFileSync('./public/views/chambres.html');

    } else if (folder === 'contact.html') {
        res.statusCode = 200;

        file = Fs.readFileSync('./public/views/contact.html');
    } else if (folder === 'email') {
     
        shouldEnd = false;
        log("information envoyee en post : ");
        
        let data = "";
        
        req.on('data', (chunk) => {
            data = chunk;
        });
        
        req.on('end', () => {
            log("unformated data: ");
            log(data);
            log("formated data: ");
            data = JSON.parse(JSON.stringify(QueryString.parse(decodeURI(data))));
            log(data);
            log("Envoi du mail: ")
            sendMail(Object.values(data)[5], Object.values(data)[2], Object.values(data)[0], Object.values(data)[4], Object.values(data)[3], Object.values(data)[1], function (err, data) {
                if (err) {
                    res.status(500).json({ message: 'Internal Error' });
                } else {
                    res.json({ message: 'Email sent successfully'})
                }
            })
            res.writeHead(301, { Location: "contact.html" });
            res.end();
            log("redirection done");
        });

        log("fin route admin mais callback peut etre en cours");
    } else if (folder === 'public' && fileName === 'views' && (routeArray[3] === '' |routeArray[3] === 'index.html' || routeArray[3] === 'chambres.html' || routeArray[3] === 'contact.html' )) {
        res.writeHead(301, { Location: "http://127.0.0.1:5000/index.html" });
        res.end();
    }else {
        try {
            //expression reguliere pour indentifier l'extension
            let regExp = /(?:\.([^.]+))?$/;
            //extraction de l'extension du fileName, renvoit undefined s'il n'y a pas d'extension
            let ext = regExp.exec(fileName)[0];

            res.statusCode = 200;
            

            if (ext) {
                //si extension alors fichier js, ttf, png, css
                file = Fs.readFileSync(`./public/${folder}/${fileName}`)

                //la fonction getMimeType est definie plus bas avec une explication
                res.setHeader("Content-Type", getMimeType(ext));
            } else {
                if (routeArray.length < 4) {
                    if (routeArray[1] === 'views'  || routeArray[2] === 'views') {
                        //si pas d'extension c'est du html. Noter que l'on rajoute '.html' au nom du fichier
                        res.setHeader("Content-Type", "text/html");
                        file = Fs.readFileSync(`./public/views/${folder}/${fileName}.html`, "utf-8")
                    }
                    else {
                    res.statusCode = 404;
                    file = Fs.readFileSync('./public/views/page_404.html', "utf-8");
                    }
                }
                else {
                    for (let i = 0; i < mesFonctions.mesImages.length; i++) {
                        let path_2 = "./" + mesFonctions.mesImages[i];
                        let path_1 = req.url;
                        path_1 = path_1.slice(path_1.length - path_2.length + 1, path_1.length);
                        path_1 = "." + path_1;
                        var path_3 = "public";
                        path_3 += req.url;
            
                        if (path_1 == path_2) {
                            const image = Fs.readFileSync(path_3);
            
                            res.writeHead(200, {
                                'Content-Type': 'image/img'
                            });
                            res.end(image);
                            log("images envoyées")
                        }
                    }
                }
            }
        } catch (e) {
            //si il y a eu une erreur par ex lors d'un readFileSync, renvoit la page erreur 404
            log(e);
            res.statusCode = 404;
            file = Fs.readFileSync('./public/views/page_404.html', "utf-8");
        }
    }
    //dans tous les cas renvoit un fichier ou la page erreur 404
    if(shouldEnd){
        res.end(file);
    }
    log("fin requête !");
}

/**
 * Renvoit le content-type correspondant a l'extension
 * @param {string} ext exemple : ".png"
 */
function getMimeType(ext) {
    switch (ext) {
        case '.css':
            return "text/css";
            break;
        case '.js':
            return "text/javascript";
            break;
        case '.ttf':
            return "font/ttf";
            break;
        case '.png':
            return "image/png";
            break;
        default:
            return "text/plain";
            break;
    }
}