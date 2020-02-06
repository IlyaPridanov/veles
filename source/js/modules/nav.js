'use strict';

(function () {
    const headerBtn = document.querySelector('.header__btn');
    const headerCaption = document.querySelector('.header__caption');
    const nav = document.querySelector('.js-nav-header');

    headerBtn.addEventListener('click' , function() {
        headerBtn.classList.toggle('header__btn--active');
        nav.classList.toggle('nav--inactive');
        headerCaption.classList.toggle('header__caption--inactive');
    });
})();
