var btnMenu = document.getElementById('header__menu-icon');
console.log(btnMenu);
var modalMobile = document.getElementById('modal-menu-mobile');
var btnMenuClose = document.getElementById('modal-menu-mobile-close');
var mobileContainer = document.getElementById('modal-menu-mobile-container');

btnMenu.addEventListener("click", function(e) {
    modalMobile.classList.add('close');
    mobileContainer.classList.add('close');
});
btnMenuClose.addEventListener("click", function(e) {
    modalMobile.classList.remove('close');
    mobileContainer.classList.remove('close');
})