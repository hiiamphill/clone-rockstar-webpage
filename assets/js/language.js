var main = document.querySelector('#main');
var languageBtn = document.querySelector('.language-section--btn');
var languageLists = document.querySelector('.language-lists');

languageBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    if (!languageLists.classList.contains('language-lists--active')) {
        languageLists.classList.add('language-lists--active');
    } else {
        languageLists.classList.remove('language-lists--active');
    }
});