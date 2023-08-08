var slideNames = document.querySelectorAll('.slide-name');
var slideItems = document.querySelectorAll('.slide-item');
var slideLength = slideItems.length;

var showSlide = slideItems.forEach(function(slideItem, index) {
    slideItem.addEventListener('click', function () {

        for (var j = 0; j < slideLength; j++) {
            slideItems[j].classList.remove('slide-item--active');
            slideNames[j].classList.remove('slide-name--active');
        }

        slideItems[index].classList.add('slide-item--active');
        slideNames[index].classList.add('slide-name--active');
    })
})

