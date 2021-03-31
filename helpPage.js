const foto1 = document.querySelector('.foto-1');
const foto2 = document.querySelector('.foto-2');
const foto3 = document.querySelector('.foto-3');
const foto4 = document.querySelector('.foto-4');

const li1 = document.querySelector('.li-1');
const li2 = document.querySelector('.li-2');
const li3 = document.querySelector('.li-3');
const li4 = document.querySelector('.li-4');

// ========== CLOSE FOTO ==========
const fotos = document.querySelectorAll('.foto');

function closeFoto() {
    fotos.forEach((foto) => {
        foto.classList.add('closeFoto');
        foto.classList.remove('openFoto');
        setTimeout(() => {
            foto.classList.remove('closeFoto');
        }, 0010);
    });
}
//========== CLOSE FOTO VIA BTN ==========
const closeBtns = document.querySelectorAll('.closeBtn');

closeBtns.forEach((btn) => {
    btn.addEventListener('click', closeFoto);
});
// ========== CLOSE FOTO VIA ESCAPE ==========
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeFoto();
    }
});
// ========== CLOSE FOTO VIA EMPTY CLICK (doesn't work)==========
// const sidebar = document.querySelector('.content-sidebar');
// sidebar.addEventListener('click', (e) => {
//     if (e.target !== fotos) {
//         closeFoto();
//     }
// });
// ========== /CLOSE FOTO ==========

//! OPEN FOTO
foto1.addEventListener('click', () => {
    if (!foto1.classList.contains('closeFoto')) {
        foto1.classList.add('openFoto');
        //close
        foto2.classList.add('closeFoto');
        foto2.classList.remove('openFoto');
        setTimeout(() => {
            foto2.classList.remove('closeFoto');
        }, 0010);
    }
});
li1.addEventListener('click', () => {
    foto1.classList.add('openFoto');
    //close
    foto2.classList.add('closeFoto');
    foto2.classList.remove('openFoto');
    setTimeout(() => {
        foto2.classList.remove('closeFoto');
    }, 0010);
});

//! 2 foto==========
foto2.addEventListener('click', () => {
    if (!foto2.classList.contains('closeFoto')) {
        foto2.classList.add('openFoto');
        //close
        foto1.classList.add('closeFoto');
        foto1.classList.remove('openFoto');
        setTimeout(() => {
            foto1.classList.remove('closeFoto');
        }, 0010);
    }
});
li2.addEventListener('click', () => {
    foto2.classList.add('openFoto');
    //close
    foto1.classList.add('closeFoto');
    foto1.classList.remove('openFoto');
    setTimeout(() => {
        foto1.classList.remove('closeFoto');
    }, 0010);
});

//! /OPEN FOTO
// foto.addEventListener('mouseover', () => {
//     foto.classList.add('hover-foto');
//     li.style.color = 'red';
// });

foto1.addEventListener('mouseover', () => {
    foto1.classList.add('hover-foto');
    li1.classList.add('hover-li');
});

li1.onmouseout = function () {
    foto1.classList.remove('hover-foto');
    li1.classList.remove('hover-li');
};
foto1.onmouseout = function () {
    foto1.classList.remove('hover-foto');
    li1.classList.remove('hover-li');
};
li1.onmouseover = function () {
    foto1.classList.add('hover-foto');
    li1.classList.add('hover-li');
};

// ++++
foto2.onmouseover = function () {
    this.classList.add('hover-foto');
    li2.style.color = 'rgb(255, 208, 0)';
};
foto2.onmouseout = function () {
    this.classList.remove('hover-foto');
    li2.style.color = 'white';
};

li2.onmouseover = function () {
    foto2.classList.add('hover-foto');
    li2.style.color = 'rgb(255, 208, 0)';
};
li2.onmouseout = function () {
    foto2.classList.remove('hover-foto');
    li2.style.color = 'white';
};
// ++++
foto3.onmouseover = function () {
    this.classList.add('hover-foto');
    li3.style.color = 'rgb(255, 208, 0)';
};
foto3.onmouseout = function () {
    this.classList.remove('hover-foto');
    li3.style.color = 'white';
};

li3.onmouseover = function () {
    foto3.classList.add('hover-foto');
    li3.style.color = 'rgb(255, 208, 0)';
};
li3.onmouseout = function () {
    foto3.classList.remove('hover-foto');
    li3.style.color = 'white';
};
// ++++++
foto4.onmouseover = function () {
    this.classList.add('hover-foto');
    li4.style.color = 'rgb(255, 208, 0)';
};
foto4.onmouseout = function () {
    this.classList.remove('hover-foto');
    li4.style.color = 'white';
};

li4.onmouseover = function () {
    foto4.classList.add('hover-foto');
    li4.style.color = 'rgb(255, 208, 0)';
};
li4.onmouseout = function () {
    foto4.classList.remove('hover-foto');
    li4.style.color = 'white';
};
// foto4.addEventListener('click', function (e) {
//     console.log(e.target);
// });
