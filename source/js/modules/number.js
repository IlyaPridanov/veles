'use strict';

(function () {
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
})();
