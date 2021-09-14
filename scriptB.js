// Menu dynamique

const rectNav = document.querySelector('.rectNav');
nav = document.querySelector('nav');
const a = document.querySelectorAll('nav a');
const button = document.querySelector('.btn-grad ');
const inscription = document.querySelector('#inscription');
const insc = document.querySelector('#insc');
const header = document.querySelector('#navAnim');
let height = header.clientHeight;


window.addEventListener('scroll', () => {
    if(window.scrollY > height){
        rectNav.classList.add('scroll');
        button.classList.add('scroll');
        inscription.classList.add('scroll');
        insc.classList.add('scroll');
        nav.classList.add('scroll');
        a.forEach(elm=>{ 
            elm.classList.add('scroll')})
    } else {
        rectNav.classList.remove('scroll');
        button.classList.remove('scroll');
        inscription.classList.remove('scroll');
        insc.classList.remove('scroll');
        nav.classList.remove('scroll');
        a.forEach(elm=>{ 
            elm.classList.remove('scroll')})
    }
});

// Système de notation

const allStars = document.querySelectorAll(".fa-star");

init();

function init() {
    allStars.forEach((star) => {
        star.addEventListener("click", getRating);
        star.addEventListener("mouseover", addCSS);
        star.addEventListener("mouseleave", removeCSS);
    });
}

function getRating(e) {
    console.log(e.target);
}

function addCSS(e, css = "checked") {
    e.target.classList.add (css);
}

function removeCSS(e, css = "checked") {
    e.target.classList.remove (css);
}

