const hamburger = document.querySelector('.hamburger');
const myNav = document.querySelector('.myNav');
const navLink = document.querySelectorAll('.navLink')

hamburger.addEventListener('click', mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle('active');
    myNav.classList.toggle('active');
    // console.log(mobileMenu);
}

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu(){
    hamburger.classList.remove('active');
    myNav.classList.remove('active');
    // console.log(closeMenu);
}
