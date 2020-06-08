let laptop = document.querySelector('.laptop');
window.addEventListener('scroll', function () {
    if (window.scrollY > 750) {
        laptop.style.animation = 'laptop 1.5s forwards ease';
    }
})
let welcome = document.querySelector('.welcome-text');
window.addEventListener('load', function () {

    welcome.style.animation = 'welcome .5s forwards ease';

})
let occupation = document.querySelector('.occupation');
window.addEventListener('load', function () {

    occupation.style.animation = 'occupation 1s forwards ease';

})