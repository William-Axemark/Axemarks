'use strict'

function myFunc() {
    const y = window.scrollY;

    const el = document.getElementById('myBox');
    if(y > 10) {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}

window.addEventListener('scroll', myFunc);