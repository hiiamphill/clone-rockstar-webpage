var main = document.querySelector('#main');
var accountBtn = document.querySelector('.account-btn');
var accountLists = document.querySelector('.account-navlist');

main.onclick = function () {
    accountLists.classList.remove('account-navlist--active');
}

accountBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    if (!accountLists.classList.contains('account-navlist--active')) {
        accountLists.classList.add('account-navlist--active');
    } else {
        accountLists.classList.remove('account-navlist--active');
    }
})