"use strict";

const filmStrip = document.querySelector('.film-strip');

let images = filmStrip.querySelectorAll('img');
let totalWidth = 0;

images.forEach(img => {
    totalWidth += img.clientWidth + 20;
});

filmStrip.style.width = totalWidth + 'px';

filmStrip.addEventListener('animationiteration', () => {
    filmStrip.style.transform = 'translateY(0)';
});
