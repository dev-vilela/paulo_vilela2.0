

// MENU HAMBURGUER
document.addEventListener('DOMContentLoaded', function () {
    const hamburguer = document.querySelector('.menu-card');
    const navMenu = document.querySelector('.nav-menu');

    hamburguer.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});


const lamp = document.querySelector('.lamp');


const moon = document.querySelector('.switch');
const moonImage = document.getElementById('moonImage');




//DARK MODE
moon.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark-mode');
        toggleLamp();
        toggleMoonImage(); 
 
    });

// LUA - DARK/LIGHT MODE
function toggleMoonImage() {
    if (document.documentElement.classList.contains('dark-mode')) {
        moonImage.src = './assets/icons/light-moon.svg'; 
    } else {
        moonImage.src = './assets/icons/moon.svg'; 
    }
}


