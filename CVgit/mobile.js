//  tableau qui contient les liens de la barre NAV /
lienMenu = document.querySelectorAll('nav ul li');
// / tableau qui contient les Ã©crans de ma page 
ecranAffiche = document.querySelectorAll('.ecran');
for (let i = 0; i < lienMenu.length; i++) {
    lienMenu[i].addEventListener('click',
        function () { positionnerEcran(i); });
    lienMenu[i].addEventListener('mouseover',
        function () { changerCurseur(i); });
}
// Fonctions
function positionnerEcran(numEcran) {
    ecranAffiche[numEcran].scrollIntoView(
        {
            block: 'end',
            inline: 'start',
            behavior: 'smooth'
        }
    );
}
function changerCurseur(numLien) {
    lienMenu[numLien].style.cursor = 'pointer';
}


if (window.matchMedia("(max-width: 858px)").matches) {
    var lesclasseasupprimer = document.getElementsByClassName('btn1');
    Array.from(lesclasseasupprimer).forEach((laclasseasupprimer, index) => {
        laclasseasupprimer.classList.remove('btn1');
    }
    );
}
else {
    /* the view port is max 858 pixels wide */
    console.log("Grand ecran");
}

