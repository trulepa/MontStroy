'use strict';

function init() {

  var nav = document.querySelector('.site-nav__list');
  var toggle = document.querySelector('.site-nav__toggle');

  toggle.classList.remove('site-nav__toggle--nojs');
  nav.classList.remove('site-nav__list--active');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('site-nav__list--active');
  });

}

window.addEventListener('load', init);
