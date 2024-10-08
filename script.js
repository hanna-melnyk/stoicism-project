//script.js

/* Toggling menu on small screens */
const navContainer = document.querySelector('.nav-container');
navContainer.addEventListener('click', function(e) {
    if (e.target.closest('.hamburger-icon button')) {
        document.querySelector('.menu-items')?.classList.toggle('active');
    }
});




/* Bird ------------------------------------------------------*/
// defining the image
const originalSrc = 'https://assets.codepen.io/10055281/bird_up.png';
const changedSrc = 'https://assets.codepen.io/10055281/bird_down.png';
const image = document.getElementById('scrollImage'); // pointing to the image that is going to be changed
//--------------------------------
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        if (!lastRan) {
            func.apply(null, arguments);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(null, arguments);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

let isAtBottom = false; // State to track whether we're currently at the bottom

window.addEventListener('scroll', throttle(function() {
    const currentlyAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    // Only update the image source if the state has changed
    if (currentlyAtBottom !== isAtBottom) {
        image.src = currentlyAtBottom ? changedSrc : originalSrc;
        isAtBottom = currentlyAtBottom; // Update the state
    }
}, 200));



/* For external links: open in a new tab ------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const externalLinks = document.querySelectorAll('a.external-link');
    externalLinks.forEach((link) => {
        link.setAttribute('target', '_blank');
    });
});