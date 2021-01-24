//Jquery pour le menu burger 
$(function () {
    $(".header_usermenu_responsive-icon i").click(function () {
        $(".header_usermenu").toggleClass("clicked");
    });

    $(".main-menu-responsive-icon i").click(function () {
        $(".main-menu .mobile-hide").toggleClass("clicked");
    });
});

//Chargement de l'image pour la bannière
window.onload = function () {
    document.body.className += ' loaded'
};




// fonctions de la galerie d'images

// initialiser la première image comme image affichée par défault
var slideIndex = 1;
showSlides(slideIndex);

// Contrôle des boutons suivant et précédant 
function plusSlides(n) {
    // appelle la fonction showSlides en changeant l'index de 1 vers l'avant ou l'arrière
    showSlides(slideIndex += n);
};

// Contrôle via le clic des mignatures
// est appelé par le clic de la mignature
function currentSlide(n) {
    // lance la fonction showslides de l'index donné par le clic
    showSlides(slideIndex = n);
};

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("galerie_slides"); // créé une liste de tous les éléments de la classe "galerie_slides" (toutes les images censées être affichées en grand)
    var dots = document.getElementsByClassName("demo"); // créé une liste de tous les éléments de la classe "demo"           (toutes les images des mignatures)
    var captionText = document.getElementById("caption"); // créé une varible captionText de l'élément dont l'ID est "caption" (le texte affiché au milieu de la galerie)

    // gestions des cas possibles
    if (n > slides.length) { slideIndex = 1 } // si on dépasse de la longeur maximale de la liste on rétablit la valeur par défault slideIndex = 1 (on affiche la première image)
    if (n < 1) { slideIndex = slides.length } // si on se retrouve en dessous de la longueur minimale de la liste on définit la valeur de l'index comme la valeur maximale (on affiche la dernière image)
    for (i = 0; i < slides.length; i++) { // on parcourt la liste des images
        slides[i].style.display = "none"; // on défénit toutes les images comme cachées
    }
    for (i = 0; i < dots.length; i++) { // on parcourt la liste des mignatures
        dots[i].className = dots[i].className.replace(" active", ""); // on enlève l'attribut "active" de l'image de la miniature qui était déja affichée
    }
    slides[slideIndex - 1].style.display = "block"; // on affiche l'image souhaitée
    slides[slideIndex - 1].style.border = "1px solid #AC9D8E"; // on rajoute une bordure à l'image affichée
    
    dots[slideIndex - 1].className += " active"; // on attribue l'attribut active à l'image de la miniature correspondante
    captionText.innerHTML = dots[slideIndex - 1].alt; // on change la valeur du texte qui va avec l'image affichée (attribut "alt")
};




// Modals page d'accueil activites:


// Recuperer les cartes de descriptions
var bambou = document.getElementById("activites_modal_bambouseraie");
var duche = document.getElementById("activites_modal_duche");
var pdg = document.getElementById("activites_modal_pdg");
var arenes = document.getElementById("activites_modal_arenes");

// Recuperer les boutons d'action
var btn = document.getElementsByClassName("activites_buttons");

// Recuperer les croix cliquables
var span = document.getElementsByClassName("activites_close");

// Quand on clique sur le bouton, detecter quel bouton à été cliqué et afficher la bonne carte correspondante
for (let z = 0; z < btn.length; z++) {
    btn[z].onclick = function () {
        console.log(z)
        if (z == 0) {
            bambou.style.display = "block";
        }
        else if (z == 1) {
            duche.style.display = "block";
        }
        else if (z == 2) {
            pdg.style.display = "block";
        }
        else if (z == 3) {
            arenes.style.display = "block";
        }
    };
}

// Quand on clique sur la croix en haut à droite, la fermer
span[0].onclick = function () {
    bambou.style.display = "none";
}
span[1].onclick = function () {
    duche.style.display = "none";
}
span[2].onclick = function () {
    pdg.style.display = "none";
}
span[3].onclick = function () {
    arenes.style.display = "none";
};

// Quand on clique en dehors de la carte de description, la fermer
window.onclick = function (event) {
    if (event.target == bambou) {
        bambou.style.display = "none";
    }
    else if (event.target == duche) {
        duche.style.display = "none";
    }
    else if (event.target == pdg) {
        pdg.style.display = "none";
    }
    else if (event.target == arenes) {
        arenes.style.display = "none";
    }
};




// Map bambouseraie
(function () {
    var height = document.getElementById("activites_modal_description_map_1").style.height;
    var width = document.getElementById("activites_modal_description_map_1").style.width;

    var setting = { "height": height, "width": width, "zoom": 17, "queryString": "la Bambouseraie, Le Buisson-de-Cadouin, France", "place_id": "ChIJ-YigVr5HqxIRLncv1msodaQ", "satellite": false, "centerCoord": [44.82521946578372, 0.9268656999999969], "cid": "0xa475286bd62f772e", "lang": "en", "cityUrl": "/france/le-buisson-de-cadouin-31703", "cityAnchorText": "Map of Le Buisson-de-Cadouin, South of France, France", "id": "activites_modal_description_map_1", "embed_id": "350485" };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=350485';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();

// Map Duché d'Uzès
(function () {
    var height = document.getElementById("activites_modal_description_map_2").style.height;
    var width = document.getElementById("activites_modal_description_map_2").style.width;

    var setting = { "height": height, "width": width, "zoom": 17, "queryString": "Le Duché D’Uzes, Rue Jacques d'Uzès, Uzès, France", "place_id": "ChIJpYrmCnm1tRIRrqCyeNDmMIw", "satellite": false, "centerCoord": [44.01292941534236, 4.41956465000001], "cid": "0x8c30e6d078b2a0ae", "lang": "en", "cityUrl": "/france/nimes-2733", "cityAnchorText": "Map of Nimes, South of France, France", "id": "activites_modal_description_map_2", "embed_id": "350485" };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=350485';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();

// Map Pont du Gard
(function () {
    var height = document.getElementById("activites_modal_description_map_3").style.height;
    var width = document.getElementById("activites_modal_description_map_3").style.width;

    var setting = { "height": height, "width": width, "zoom": 15, "queryString": "Pont du Gard, Route du Pont du Gard, Vers-Pont-du-Gard, France", "place_id": "ChIJ1QTnSMLItRIR4uqG8xlzsSY", "satellite": false, "centerCoord": [43.95007537574951, 4.534135435412612], "cid": "0x26b17319f386eae2", "lang": "fr", "cityUrl": "/france/nimes-2733", "cityAnchorText": "Map of Nimes, South of France, France", "id": "activites_modal_description_map_3", "embed_id": "350485" };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=350485';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();

// Map Arenes
(function () {
    var height = document.getElementById("activites_modal_description_map_4").style.height;
    var width = document.getElementById("activites_modal_description_map_4").style.width;

    var setting = { "height": height, "width": width, "zoom": 17, "queryString": "Amfiteatre de Nimes, //la faute// Boulevard des Arènes, Nîmes, France", "place_id": "ChIJBzFHnAkttBIRD5QIkdH6oic", "satellite": false, "centerCoord": [43.834895665247245, 4.359599099999989], "cid": "0x27a2fad19108940f", "lang": "en", "cityUrl": "/france/arles-41", "cityAnchorText": "Map of Arles, South of France, France", "id": "activites_modal_description_map_4", "embed_id": "350485" };
    var d = document;                                                       // la faute vient du site...
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=350485';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();

// footer map function JS
(function () {
    var height = document.getElementById("footer-map-body").style.height;
    var width = document.getElementById("footer-map-body").style.width;

    var setting = { "height": height, "width": width, "zoom": 15, "queryString": "Les Deux Tours, Brignon, France", "place_id": "ChIJ5_9ORLQ5tBIR_A_PFzuXsbU", "satellite": false, "centerCoord": [43.97842839405216, 4.21104855632469], "cid": "0xb5b1973b17cf0ffc", "lang": "fr", "cityUrl": "/france/nimes-2733", "cityAnchorText": "Carte de Nîmes, Sud de la France, France", "id": "footer-map-body", "embed_id": "297355" };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=297355';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting);
    }
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();

//footer map on phone
(function () {
    var height = document.getElementById("footer-map-body-phone").style.height;
    var width = document.getElementById("footer-map-body-phone").style.width;

    var setting = { "height": height, "width": width, "zoom": 15, "queryString": "Les Deux Tours, Brignon, France", "place_id": "ChIJ5_9ORLQ5tBIR_A_PFzuXsbU", "satellite": false, "centerCoord": [43.97842839405216, 4.21104855632469], "cid": "0xb5b1973b17cf0ffc", "lang": "fr", "cityUrl": "/france/nimes-2733", "cityAnchorText": "Carte de Nîmes, Sud de la France, France", "id": "footer-map-body-phone", "embed_id": "297355" };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=297355';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting);
    }
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();



var contacts = document.getElementById("footer-contact");
var captcha = document.getElementById("footer-captcha")

captcha.onclick = function (event) {
    console.log(contacts)
    console.log(captcha)
    if (event.target == captcha) {
        contacts.style.display = "flex";
        captcha.style.display = "none";
    }
};