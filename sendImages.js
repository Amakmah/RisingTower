const FS = require("fs");
var images_URLs = [];

/**
 * renvoit un objet contenant le tableau images.
 */

function readImagesFile() {

    //lire le fichier JSON externe
    let monJson = FS.readFileSync(__dirname + '/images.json');

    //interpreter le contenu du fichier comme du json
    let monJsonDecoded = JSON.parse(monJson);
    displayImages(monJsonDecoded);
}

function displayImages(json_file) {
    
    for (var key_1 = 0, l1 = Object.values(json_file).length; key_1 < l1; key_1++) {
        var obj_1 = json_file.images;

        for (var key_2 = 0, l2 = Object.values(obj_1).length; key_2 < l2; key_2++) {
            var obj_2 = json_file.images[key_2];

            for (var key_3 = 0, l3 = Object.values(obj_2)[0].length; key_3 < l3; key_3++) {
                var obj_3 = ((Object.values(obj_2)[0][key_3]));
                
                for (var key_4 = 0, l4 = Object.values(Object.values(obj_3)[0]).length; key_4 < l4; key_4++) {
                    var obj_4 = Object.values(Object.values(obj_3)[0])[key_4];
                    images_URLs.push(obj_4);
                }

            }
        }
    }
    return images_URLs;
}

readImagesFile();
console.log(images_URLs);

module.exports = {
    readImagesFile: readImagesFile,
    mesImages: images_URLs
};