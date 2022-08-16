const seconds = document.querySelector('[data-seconds]');
const minutes = document.querySelector('[data-minutes]');
const hours   = document.querySelector('[data-hours]');

setInterval(setClock, 1000);

function setClock() {
    const currentDate  = new Date;
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio   = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(seconds, secondsRatio);
    setRotation(minutes, minutesRatio);
    setRotation(hours,   hoursRatio );
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();


const menuToggle = document.getElementsByClassName('menu-toggle')[0];

menuToggle.addEventListener('click', () => {
    document.getElementsByClassName('navbar-links')[0].classList.toggle('active');
})




const modeToggle = document.getElementById('mode-toggle');    

modeToggle.onclick = function(){
    modeToggle.classList.toggle('dark');

    document.querySelector('body').classList.toggle('dark');
    document.getElementsByClassName('navbar')[0].classList.toggle('dark');
        document.getElementsByClassName('logo')[0].classList.toggle('dark');
        const navLinks = document.getElementsByClassName('nav-link');
        for (var i=0; i<navLinks.length; i++) {
            navLinks[i].classList.toggle('dark');
        }
        const menuBar = document.getElementsByClassName('menu-bar');
        for (var i=0; i<menuBar.length; i++) {
            menuBar[i].classList.toggle('dark');
        }
        //need to figure out dark mode for link background-color on hover
    document.getElementsByClassName('title')[0].classList.toggle('dark');
    document.getElementsByClassName('clock-container')[0].classList.toggle('dark');
    const credit = document.getElementsByClassName('credit');
        for (var i=0; i<credit.length; i++) {
            credit[i].classList.toggle('dark');
        }
    document.getElementsByClassName('introduction')[0].classList.toggle('dark');
    document.getElementsByClassName('note')[0].classList.toggle('dark');
    document.getElementsByClassName('html-container')[0].classList.toggle('dark');
    document.getElementsByClassName('css-container')[0].classList.toggle('dark');
    document.getElementsByClassName('js-container')[0].classList.toggle('dark');
    const snippet = document.getElementsByClassName('snippet');
        for (var i=0; i<snippet.length; i++) {
            snippet[i].classList.toggle('dark');
        }
    const code = document.getElementsByClassName('code');
    for (var i=0; i<code.length; i++) {
        code[i].classList.toggle('dark');
    }
}




let scrollpos = window.scrollY;
let header = document.querySelector('header');

function removeOpacity() {
    header.style.opacity = "0";
    header.style.pointerEvents = "none";
}
function addOpacity() {
    header.style.opacity = "1";
    header.style.pointerEvents = "all";
}

window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;

    if(scrollpos > 50){
        removeOpacity();
    }
    else {
        addOpacity();
    }
    console.log(scrollpos);
});