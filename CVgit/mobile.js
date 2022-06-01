
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