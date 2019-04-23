var navMain = document.querySelector('.main-nav');
navMain.classList.remove('main-nav--nojs');

var headerToggle = document.querySelector('.page-header__toggle');

headerToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
