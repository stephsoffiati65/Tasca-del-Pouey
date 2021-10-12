
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

    nav.style.marginTop = ("0");

    if (menu.classList.contains("responsive")) {
        menu.classList.remove("responsive");
        nav.style.width = ("50px");
        rectNav.style.width = ("50px");
    } else {
        menu.classList.add("responsive");
        nav.style.width = ("100%");
        rectNav.style.width = ("100%");
        iconX.style.display = ("block");
        iconX.style.fontSize = ("50px");
        iconX.style.color = ("#27282a");
        iconI.style.display = ("none");
        }
})

iconX.addEventListener('click', () => {  
        nav.style.marginTop = ("30px");
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

   




