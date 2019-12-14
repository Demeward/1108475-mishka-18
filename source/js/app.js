var menuButton = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--no-js");
menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav--closed");
});

var promoButton = document.querySelector(".promo__order");
var overlay = document.querySelector(".modal-overlay");
var modal = document.querySelector(".modal");
var catalogButton = document.querySelectorAll(".catalog__basket");

if (promoButton) {
  promoButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
    overlay.classList.add("modal-overlay--show");
  })
};

if (catalogButton) {
  for (var i = 0; i < catalogButton.length; i++) {
    catalogButton[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modal.classList.add('modal--show');
      overlay.classList.add('modal-overlay--show');
    });
  }
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
      modal.classList.remove("modal--show");
      overlay.classList.remove("modal-overlay--show");
  }
});


overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal--show");
  overlay.classList.remove("modal-overlay--show");
});
