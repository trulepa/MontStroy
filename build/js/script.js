'use strict';

function init(event) {

  var nav__list = document.querySelector('.site-nav__list');
  var nav__toggle = document.querySelector('.site-nav__toggle');

  nav__toggle.classList.remove('site-nav__toggle--nojs');
  nav__list.classList.remove('site-nav__list--active');

  nav__toggle.addEventListener('click', function () {
    nav__list.classList.toggle('site-nav__list--active');
  });

}

window.addEventListener("load", init);
