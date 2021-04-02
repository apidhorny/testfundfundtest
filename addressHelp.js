const foto1 = document.querySelector('.foto-1');
const foto2 = document.querySelector('.foto-2');
const foto3 = document.querySelector('.foto-3');
const foto4 = document.querySelector('.foto-4');
const foto5 = document.querySelector('.foto-5');
const foto6 = document.querySelector('.foto-6');

const li1 = document.querySelector('.li-1');
const li2 = document.querySelector('.li-2');
const li3 = document.querySelector('.li-3');
const li4 = document.querySelector('.li-4');
const li5 = document.querySelector('.li-5');
const li6 = document.querySelector('.li-6');

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

const CLOSE_FOTO_1 = () => {
    foto1.classList.add('closeFoto');
    foto1.classList.remove('openFoto');
    setTimeout(() => {
        foto1.classList.remove('closeFoto');
    }, 0010);
};
const CLOSE_FOTO_2 = () => {
    foto2.classList.add('closeFoto');
    foto2.classList.remove('openFoto');
    setTimeout(() => {
        foto2.classList.remove('closeFoto');
    }, 0010);
};
const CLOSE_FOTO_3 = () => {
    foto3.classList.add('closeFoto');
    foto3.classList.remove('openFoto');
    setTimeout(() => {
        foto3.classList.remove('closeFoto');
    }, 0010);
};
const CLOSE_FOTO_4 = () => {
    foto4.classList.add('closeFoto');
    foto4.classList.remove('openFoto');
    setTimeout(() => {
        foto4.classList.remove('closeFoto');
    }, 0010);
};
const CLOSE_FOTO_5 = () => {
    foto5.classList.add('closeFoto');
    foto5.classList.remove('openFoto');
    setTimeout(() => {
        foto5.classList.remove('closeFoto');
    }, 0010);
};
const CLOSE_FOTO_6 = () => {
    foto6.classList.add('closeFoto');
    foto6.classList.remove('openFoto');
    setTimeout(() => {
        foto6.classList.remove('closeFoto');
    }, 0010);
};

//========== OPEN FOTO ==========
// FOTO 1
foto1.addEventListener('click', () => {
    if (!foto1.classList.contains('closeFoto')) {
        foto1.classList.add('openFoto');
        //close
        CLOSE_FOTO_2();
        CLOSE_FOTO_3();
        CLOSE_FOTO_4();
        CLOSE_FOTO_6();
    }
});
li1.addEventListener('click', () => {
    foto1.classList.add('openFoto');
    //close
    CLOSE_FOTO_2();
    CLOSE_FOTO_3();
    CLOSE_FOTO_4();
    CLOSE_FOTO_6();
});

// FOTO 2
foto2.addEventListener('click', () => {
    if (!foto2.classList.contains('closeFoto')) {
        foto2.classList.add('openFoto');
        //close
        CLOSE_FOTO_1();
        CLOSE_FOTO_3();
        CLOSE_FOTO_4();
        CLOSE_FOTO_5();
        CLOSE_FOTO_6();
    }
});
li2.addEventListener('click', () => {
    foto2.classList.add('openFoto');
    //close
    CLOSE_FOTO_1();
    CLOSE_FOTO_3();
    CLOSE_FOTO_4();
    CLOSE_FOTO_5();
    CLOSE_FOTO_6();
});
// FOTO 3
foto3.addEventListener('click', () => {
    if (!foto3.classList.contains('closeFoto')) {
        foto3.classList.add('openFoto');
        //close
        CLOSE_FOTO_1();
        CLOSE_FOTO_2();
        CLOSE_FOTO_4();
        CLOSE_FOTO_5();
        CLOSE_FOTO_6();
    }
});
li3.addEventListener('click', () => {
    foto3.classList.add('openFoto');
    //close
    CLOSE_FOTO_1();
    CLOSE_FOTO_2();
    CLOSE_FOTO_4();
    CLOSE_FOTO_5();
    CLOSE_FOTO_6();
});
// FOTO 4
foto4.addEventListener('click', () => {
    if (!foto4.classList.contains('closeFoto')) {
        foto4.classList.add('openFoto');
        //close
        CLOSE_FOTO_1();
        CLOSE_FOTO_2();
        CLOSE_FOTO_3();
        CLOSE_FOTO_5();
        CLOSE_FOTO_6();
    }
});
li4.addEventListener('click', () => {
    foto4.classList.add('openFoto');
    //close
    CLOSE_FOTO_1();
    CLOSE_FOTO_2();
    CLOSE_FOTO_3();
    CLOSE_FOTO_5();
    CLOSE_FOTO_6();
});
// FOTO 5
foto5.addEventListener('click', () => {
    if (!foto5.classList.contains('closeFoto')) {
        foto5.classList.add('openFoto');
        //close
        CLOSE_FOTO_1();
        CLOSE_FOTO_2();
        CLOSE_FOTO_3();
        CLOSE_FOTO_4();
        CLOSE_FOTO_6();
    }
});
li5.addEventListener('click', () => {
    foto5.classList.add('openFoto');
    //close
    CLOSE_FOTO_1();
    CLOSE_FOTO_2();
    CLOSE_FOTO_3();
    CLOSE_FOTO_4();
    CLOSE_FOTO_6();
});
// FOTO 6
foto6.addEventListener('click', () => {
    if (!foto6.classList.contains('closeFoto')) {
        foto6.classList.add('openFoto');
        //close
        CLOSE_FOTO_1();
        CLOSE_FOTO_2();
        CLOSE_FOTO_3();
        CLOSE_FOTO_4();
        CLOSE_FOTO_5();
    }
});
li6.addEventListener('click', () => {
    foto6.classList.add('openFoto');
    //close
    CLOSE_FOTO_1();
    CLOSE_FOTO_2();
    CLOSE_FOTO_3();
    CLOSE_FOTO_4();
    CLOSE_FOTO_5();
});

//========== /OPEN FOTO ==========

//========== MOUSEOVER && MOUSEOUT ==========
// FOTO 1
foto1.addEventListener('mouseover', () => {
    foto1.classList.add('hover-foto');
    li1.classList.add('hover-li');
});
foto1.addEventListener('mouseout', () => {
    foto1.classList.remove('hover-foto');
    li1.classList.remove('hover-li');
});
li1.addEventListener('mouseover', () => {
    foto1.classList.add('hover-foto');
    li1.classList.add('hover-li');
});
li1.addEventListener('mouseout', () => {
    foto1.classList.remove('hover-foto');
    li1.classList.remove('hover-li');
});

// FOTO 2
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
// FOTO 3
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
// FOTO 4
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
// FOTO 5
foto5.addEventListener('mouseover', () => {
    foto5.classList.add('hover-foto');
    li5.classList.add('hover-li');
});
foto5.addEventListener('mouseout', () => {
    foto5.classList.remove('hover-foto');
    li5.classList.remove('hover-li');
});
li5.addEventListener('mouseover', () => {
    foto5.classList.add('hover-foto');
    li5.classList.add('hover-li');
});
li5.addEventListener('mouseout', () => {
    foto5.classList.remove('hover-foto');
    li5.classList.remove('hover-li');
});
// FOTO 6
foto6.addEventListener('mouseover', () => {
    foto6.classList.add('hover-foto');
    li6.classList.add('hover-li');
});
foto6.addEventListener('mouseout', () => {
    foto6.classList.remove('hover-foto');
    li6.classList.remove('hover-li');
});
li6.addEventListener('mouseover', () => {
    foto6.classList.add('hover-foto');
    li6.classList.add('hover-li');
});
li6.addEventListener('mouseout', () => {
    foto6.classList.remove('hover-foto');
    li6.classList.remove('hover-li');
});
//========== /MOUSEOVER && MOUSEOUT ==========
