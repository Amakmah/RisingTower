
//Jquery pour le menu burger 
$(function(){
  $(".header_usermenu_responsive-icon i").click(function(){
    $(".header_usermenu").toggleClass("clicked");
  });
  
  $(".main-menu-responsive-icon i").click(function(){
    $(".main-menu .mobile-hide").toggleClass("clicked");
  });
});

//Chargement de l'image pour la bannière
window.onload = function() {
  document.body.className += ' loaded'
};

// footer map function JS
(function () {
  var setting = {"height":200,"width":500,"zoom":15,"queryString":"Les Deux Tours, Brignon, France","place_id":"ChIJ5_9ORLQ5tBIR_A_PFzuXsbU","satellite":false,"centerCoord":[43.97842839405216,4.21104855632469],"cid":"0xb5b1973b17cf0ffc","lang":"fr","cityUrl":"/france/nimes-2733","cityAnchorText":"Carte de Nîmes, Sud de la France, France","id":"footer-map-body","embed_id":"297355"};
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

// gallery function JS

// Init first iamge as default displayed image
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("galerie_slides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}