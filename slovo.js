const SCROLL_WINDOW = document.querySelector('.scroll-wrapper');
const SCROLL_BTN = document.querySelector('#myBtn');

// When the user scrolls down 50px from the top of the document, show the button
SCROLL_WINDOW.addEventListener('scroll', () => {
    if (SCROLL_WINDOW.scrollTop > 50) {
        SCROLL_BTN.style.display = 'block';
    } else {
        SCROLL_BTN.style.display = 'none';
    }
});

// When the user clicks on the button, scroll to the top of the document
SCROLL_BTN.addEventListener('click', () => {
    SCROLL_WINDOW.scrollTop = 0;
});
