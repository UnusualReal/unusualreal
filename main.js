ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

const typed = new Typed('.multiple-text', {
    strings: ['3D artist', 'Youtuber' , 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})




ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .art-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');








var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');
var video4 = document.getElementById('video4');


video1.onended = function () {
    video2.play();
    video1.style.opacity= 0;
    video2.style.opacity= 1;
}

video2.onended = function () {
    video3.play();
    video2.style.opacity= 0;
    video3.style.opacity= 1;
}

video3.onended = function () {
    video4.play();
    video3.style.opacity= 0;
    video4.style.opacity= 1;
}

video4.onended = function () {
    video1.play();
    video4.style.opacity= 0;
    video1.style.opacity= 1;
}