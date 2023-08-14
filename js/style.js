"use strict";

// document.addEventListener('DOMContentLoaded', function() {
//   const carousel = document.querySelector('.carousel');
//   const icon = document.querySelector('.carousel_icon');

//   // 切换旋转木马状态
//   icon.addEventListener('click', function() {
//       carousel.classList.toggle('show-second-carousel');
//   });
// });


const filmStrip = document.querySelector('.film-strip');

let images = filmStrip.querySelectorAll('img');
let totalWidth = 0;

images.forEach(img => {
    totalWidth += img.clientWidth + 20; // 20px 是图片之间的间距
});

filmStrip.style.width = totalWidth + 'px';

// 添加动画结束事件监听器
filmStrip.addEventListener('animationiteration', () => {
    // 将滚动位置重置到第一帧
    filmStrip.style.transform = 'translateY(0)';
});
