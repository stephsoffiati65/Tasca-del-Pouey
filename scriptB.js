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
    const overedStar = e.target;
    overedStar.classList.add(css);
    const previousSiblings = getPreviousSiblings(overedStar);
    // previousSiblings.forEach((elem) => elem.classList.add(css));
    console.log("previous", previousSiblings);
}

function removeCSS(e, css = "checked") {
    e.target.classList.remove (css);
}

function getPreviousSiblings(elem) {
    let siblings = [];
    const spanNodeType = 1;
    while((elem = elem.previousSibling)) {
        if (elem.nodeType === spanNodeType) {
             siblings = siblings.push(elem) //[elem, ...siblings];
        }
    }
    return siblings;
}

// // vérifier étape par étape

// const allStars = document.querySelectorAll(".fa-star");
// console.log("allStars", allStars);
// const highlightedStars = [];
// const rating = document.querySelector(".rating");

// init();

// function init() {
//   allStars.forEach((star) => {
//     star.addEventListener("click", saveRating);
//     star.addEventListener("mouseover", addCSS);
//     star.addEventListener("mouseleave", removeCSS);
//   });
// }

// function saveRating(e) {
//   console.log(e, e.target, e.target.nodeName, e.target.nodeType);
//   console.dir(e.target);
//   console.log(e.target.dataset);
//   removeEventListenersToAllStars();
//   rating.innerText = e.target.dataset.star;
// }

// function removeEventListenersToAllStars() {
//   allStars.forEach((star) => {
//     star.removeEventListener("click", saveRating);
//     star.removeEventListener("mouseover", addCSS);
//     star.removeEventListener("mouseleave", removeCSS);
//   });
// }

// function addCSS(e, css = "checked") {
//   const overedStar = e.target;
//   overedStar.classList.add(css);
//   const previousSiblings = getPreviousSiblings(overedStar);
//   console.log("previousSiblings", previousSiblings);
//   previousSiblings.forEach((elem) => elem.classList.add(css));
// }

// function removeCSS(e, css = "checked") {
//   const overedStar = e.target;
//   overedStar.classList.remove(css);
//   const previousSiblings = getPreviousSiblings(overedStar);
//   previousSiblings.forEach((elem) => elem.classList.remove(css));
// }

// function getPreviousSiblings(elem) {
//   console.log("elem.previousSibling", elem.previousSibling);
//   let sibs = [];
//   const spanNodeType = 1;
//   while ((elem = elem.previousSibling)) {
//     if (elem.nodeType === spanNodeType) {
//       sibs = [elem, ...sibs];
//     }
//   }
//   return sibs;
// }