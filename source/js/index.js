var navMain = document.querySelector(".main-nav");
navMain.classList.remove("main-nav--nojs");

var headerToggle = document.querySelector(".main-nav__toggle");

headerToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var modalCart = document.querySelector(".modal-cart");
var buttonOrder = document.querySelector(".button--special-offer");

if (buttonOrder) buttonOrder.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalCart.classList.add("modal-cart--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalCart.classList.contains("modal-cart--show")) {
      modalCart.classList.remove("modal-cart--show");
    }
  }
});

var cartButton = document.querySelectorAll(".catalog-item__button");
if (cartButton) {
  for (var i=0; i<cartButton.length; i++) {
    cartButton[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modalCart.classList.add("modal-cart--show");
    })
  }
}

var mapImage = document.querySelector(".contacts__map-image");
var mapIframe = document.querySelector(".contacts__map-iframe");

if (mapIframe) {
  mapIframe.classList.remove("visually-hidden");
  mapImage.classList.add("visually-hidden");
}
