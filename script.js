
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

// Barre de navigation burger responsive
 

    nav.addEventListener('click', () => { 
        if(nav.className === ""){
             nav.classList.add('responsive');
             rectNav.classList.add('responsive');
        } else {
            nav.className === ""
        }
    })
       

// Slider

const items = document.querySelectorAll('.avis');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante () {
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0
    }

    items[count].classList.add('active');
}

suivant.addEventListener('click', slideSuivante);


function slidePrecedente () {
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1
    }

    items[count].classList.add('active');
}

precedent.addEventListener('click', slidePrecedente);



