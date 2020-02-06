'use strict';

(function () {
    const btn = document.querySelectorAll('.number__btn');
    const number = document.querySelectorAll('.number__item');
    let maxNumber;
    maxNumber = Number(number[number.length - 1].textContent);

    number.forEach(function (item) {
        item.addEventListener('click' , function(evt) {
            evt.preventDefault();
            if (!(item.classList.contains('number__item--point'))) {
                number.forEach(function (item2) {
                    item2.classList.remove('number__item--active')
                })
                item.classList.add('number__item--active');
            }
        })
    })

    // btn.forEach(function (item) {
    //     item.addEventListener('click' , function() {
    //         if (item.dataset.btn === 'next') {
    //             let active;
    //             number.forEach(function (itemNum , i) {
    //                 if (itemNum.classList.contains('number__item--active')) {
    //                     active = Number(itemNum.textContent);
    //                 }
    //             });
    //             if (active < 5) {
    //                 number[active - 1].classList.remove('number__item--active');
    //                 active++;
    //                 number[active - 1].classList.add('number__item--active');
    //             }
    //             if ((active >= 5) && (active < 33)) {
    //                 number[1].classList.add('number__item--point');
    //                 number[1].textContent = '...';
    //                 active++;
    //                 number[4].textContent = active;
    //                 number[3].textContent = active - 1;
    //                 number[2].textContent = active - 2;

    //             }
    //             if (active >= 33) {
    //                 number[5].classList.remove('number__item--point');
    //                 number[5].textContent = '34';
    //                 number[4].classList.remove('number__item--active');
    //                 number[4].classList.add('number__item--active');
    //                 active++;

    //                 console.log(active);
    //             }
    //         }
    //     });
    // });

    // headerBtn.addEventListener('click' , function() {
    //     headerBtn.classList.toggle('header__btn--active');
    //     nav.classList.toggle('nav--inactive');
    //     headerCaption.classList.toggle('header__caption--inactive');
    // });
})();
