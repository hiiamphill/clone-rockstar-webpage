var menuBtn = document.querySelector('.menu-btn');
var modal = document.querySelector('#modal');
var modalWrapper = document.querySelector('.modal-wrapper');
var menu = document.querySelector('.menu-navbar');

var header = document.querySelector('#header');
var lastScrollY = window.scrollY;

// Menu
var closeModal = function () {
    menuBtn.firstElementChild.style.top = '0';
    menuBtn.lastElementChild.style.top = '0';
    modal.classList.remove('modal--active');
    modalWrapper.classList.remove('modal-wrapper--active');
}

var openModal = function () {
    menuBtn.firstElementChild.style.top = '8px';
    menuBtn.lastElementChild.style.top = '-8px';
    modal.classList.add('modal--active');
    modalWrapper.classList.add('modal-wrapper--active');
}

modal.onclick = function () {
    menu.classList.toggle('menu-navbar--hide');
    closeModal();
}

menuBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    
    menu.classList.toggle('menu-navbar--hide');
    if (!modal.classList.contains('modal--active')) {
        openModal();
    } else {
        closeModal();
    }
});

// Header
window.addEventListener('scroll', function () {
    if (lastScrollY < window.scrollY) {
        header.classList.add('header--hidden');
    } else {
        if (modal.classList.contains('modal--active')) {
            header.classList.remove('header--hidden');
        }
    }
    lastScrollY = window.scrollY;
});