var header = document.querySelector('#header');
var lastScrollY = window.scrollY;

window.addEventListener('scroll', function () {
    if (lastScrollY < window.scrollY) {
        header.classList.add('header--hidden');
    } else {
        header.classList.remove('header--hidden');
    }
    lastScrollY = window.scrollY;
});