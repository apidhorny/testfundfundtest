const SCROLL_WINDOW = document.querySelector('.scroll-wrapper');
const SCROLL_BTN = document.querySelector('#myBtn');

// SCROLL -> SHOW BUTTTON
SCROLL_WINDOW.addEventListener('scroll', () => {
    if (SCROLL_WINDOW.scrollTop > 50) {
        SCROLL_BTN.style.display = 'block';
    } else {
        SCROLL_BTN.style.display = 'none';
    }
});

// CLICK -> UP
SCROLL_BTN.addEventListener('click', () => {
    SCROLL_WINDOW.scrollTop = 0;
});
