//Jquery pour le menu burger 
$(function() {
    $(".header_usermenu_responsive-icon i").click(function() {
        $(".header_usermenu").toggleClass("clicked");
    });

    $(".main-menu-responsive-icon i").click(function() {
        $(".main-menu .mobile-hide").toggleClass("clicked");
    });
});

//Chargement de l'image pour la bannière
window.onload = function() {
    document.body.className += ' loaded'
};

// footer map function JS
(function() {
    var setting = { "height": 200, "width": 500, "zoom": 15, "queryString": "Les Deux Tours, Brignon, France", "place_id": "ChIJ5_9ORLQ5tBIR_A_PFzuXsbU", "satellite": false, "centerCoord": [43.97842839405216, 4.21104855632469], "cid": "0xb5b1973b17cf0ffc", "lang": "fr", "cityUrl": "/france/nimes-2733", "cityAnchorText": "Carte de Nîmes, Sud de la France, France", "id": "footer-map-body", "embed_id": "297355" };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=297355';
    s.async = true;
    s.onload = function(e) {
        window.OneMap.initMap(setting);
    }
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();



// fonctions de la galerie d'images

// initialiser la première image comme image affichée par défault
var slideIndex = 1;
showSlides(slideIndex);

// Contrôle des boutons suivant et précédant 
function plusSlides(n) {
    // appelle la fonction showSlides en changeant l'index de 1 vers l'avant ou l'arrière
    showSlides(slideIndex += n);
}

// Contrôle via le clic des mignatures
// est appelé par le clic de la mignature
function currentSlide(n) {
    // lance la fonction showslides de l'index donné par le clic
    showSlides(slideIndex = n);
}

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
    dots[slideIndex - 1].className += " active"; // on attribue l'attribut active à l'image de la miniature correspondante
    captionText.innerHTML = dots[slideIndex - 1].alt; // on change la valeur du texte qui va avec l'image affichée (attribut "alt")
}

//Fonction de remplacement du bouton d'envoi de mail
function EnvoiMail() {
    // appel du node mailer
    document.getElementById("bouton").value = "Message envoyé ✔";
}