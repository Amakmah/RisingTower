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




//Fonction de remplacement du bouton d'envoi de mail
function EnvoiMail() {
    document.getElementById("bouton").textContent = "Message envoyé ✔";

    document.getElementById("prenom").value =  "";
    document.getElementById("nom").value =  "";
    document.getElementById("email").value =  "";
    document.getElementById("phone").value =  "";
    document.getElementById("objet").value =  "";
    document.getElementById("message").value =  "";
};




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