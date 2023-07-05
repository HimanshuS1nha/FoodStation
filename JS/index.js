let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("review");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}


// RESPONSIVENESS OF NAVBAR 
const btn = document.getElementById('hamburger');
const navbar = document.getElementById('navbar-list');
const heading = document.getElementById('heading');
const para = document.getElementById('main-para')
btn.addEventListener('click', () => {
    if (navbar.style.display === '' || navbar.style.display === 'none') {
        navbar.style.display = 'flex';
        btn.classList.remove('bx-menu');
        btn.classList.add('bx-x');
        heading.style.opacity = 0;
        para.style.opacity = 0;
    }
    else {
        navbar.style.display = 'none';
        btn.classList.remove('bx-x');
        btn.classList.add('bx-menu');
        heading.style.opacity = 1;
        para.style.opacity = 1;
    }
})