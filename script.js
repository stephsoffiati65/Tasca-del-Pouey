
// Menu dynamique

const rectNav = document.querySelector('.rectNav');
nav = document.querySelector('nav');
const a = document.querySelectorAll('#menu a');
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

const menu = document.querySelector('#menu');
const iconI = document.querySelector('#iconI');
const iconX = document.querySelector('#iconX');
const html = document.querySelector('html');

iconI.addEventListener('click', () => { 
    if (menu.classList.contains("responsive")) {
        menu.classList.remove("responsive");
        nav.style.width = ("50px");
        rectNav.style.width = ("50px");
    } else {
        menu.classList.add("responsive");
        nav.style.width = ("100%");
        nav.style.marginTop = ("0");
        rectNav.style.width = ("100%");
        iconX.style.display = ("block");
        iconX.style.fontSize = ("50px");
        iconX.style.color = ("#27282a");
        iconI.style.display = ("none");
        }
})

iconX.addEventListener('click', () => { 
        menu.classList.remove("responsive");
        nav.style.width = ("50px");
        rectNav.style.width = ("50px");
        iconX.style.display = ("none");
        iconI.style.display = ("block");
})


html.addEventListener('click', () => {
    if (menu.classList.contains("responsive")) {
        menu.classList.remove("responsive");
        nav.style.width = ("50px");
        rectNav.style.width = ("50px");
        iconX.style.display = ("none");
        iconI.style.display = ("block");
    }
});

iconI.addEventListener('click', (e) => {
    e.stopPropagation();
});

   

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


// Message d'erreur Inscription


// const pwdInput = document.querySelector("#passwordIns");
// const confirmPwdInput = document.querySelector("#confirmPasswordIns");
// const formIns = document.querySelector("#formIns");

// document.querySelector("#formIns").addEventListener("submit", e => {
//     if (pwdInput.value !== confirmPwdInput.value) {
//         e.preventDefault();
//         console.log(pwdInput.value);
//         alert("Le mot de passe et sa confirmation doivent être identiques !");
//     }
// });

