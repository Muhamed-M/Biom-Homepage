// NAVBAR MENU
const hamburgerMenu = document.getElementById('hamburger-menu');
const bars = document.querySelectorAll('.bar');
const menu = document.querySelector('.navbar__menu-container');

hamburgerMenu.addEventListener('click', () => {
    bars.forEach((bar) => {
        bar.classList.toggle('active');
    });
    menu.classList.toggle('active');
});

// SCROLL TEXT EFFECT
const scrollTextEl = document.getElementById('scroll-text');

const scrollText = () => {
    let windowHeight = window.innerHeight;
    let scrollTextElBottom = scrollTextEl.getBoundingClientRect().bottom;
    let revealPoint = 100;

    if (scrollTextElBottom < windowHeight - revealPoint)
        scrollTextEl.classList.add('active');
    else scrollTextEl.classList.remove('active');
};

window.addEventListener('scroll', scrollText);

// HORIZONTAL SCROLL EFFECT
const horizontalSection = document.querySelector('.horizontal-scroll');
const scrollContainer = document.querySelector('.horizontal-scroll__container');

let scrollDistance = scrollContainer.scrollWidth;
horizontalSection.style.height = `${scrollDistance}px`;

window.addEventListener('scroll', () => {
    let vwOffsetTop = horizontalSection.getBoundingClientRect().top; // elements distance from top of the viewport

    if (vwOffsetTop < 0 && vwOffsetTop > -scrollDistance + horizontalSection.getBoundingClientRect().width) {
        scrollContainer.style.transform = `translateX(${vwOffsetTop}px)`;
    }
});

// TESTIMONIAL CAROUSEL
const dots = document.querySelectorAll('.dot');
const testimonials = document.querySelectorAll('.testimonial');

testimonials[0].style.display = 'flex';

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        testimonials.forEach((testimonial) => {
            testimonial.style.display = 'none';
        });

        testimonials[index].style.display = 'flex';

        dots.forEach(i => {
            i.classList.remove('active');
        });
        dots[index].classList.add('active');
    });
});

// INSTAGRAM SECTION EFFECT
const instagramSection = document.querySelector('.instagram-section');
const imagesContainer = document.querySelector('.instagram-section__images');

const revealPoint = 500;

window.addEventListener('scroll', () => {
    let vwOffsetTop = instagramSection.getBoundingClientRect().top; // elements distance from top of the viewport

    if (vwOffsetTop < revealPoint) { // if it's less than reveal point we specified, then move images
        imagesContainer.style.transform = `translateX(${vwOffsetTop / 4 - revealPoint / 4}px)`;
    }
});