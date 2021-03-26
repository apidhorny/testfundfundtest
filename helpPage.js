const foto1 = document.querySelector('.foto-1');
const foto2 = document.querySelector('.foto-2');
const foto3 = document.querySelector('.foto-3');
const foto4 = document.querySelector('.foto-4');

const li1 = document.querySelector('.li-1');
const li2 = document.querySelector('.li-2');
const li3 = document.querySelector('.li-3');
const li4 = document.querySelector('.li-4');

const closeFotoBtn1 = document.querySelector('.closeBtn');
const closeFotoBtn2 = document.querySelector('.closeBtn2');

// !MODAL-1
// const openModalFoto = document.querySelector('.foto-1');
// const closeModalFoto = document.querySelector('.modal');
// const modal = document.querySelector('.modal');

// openModalFoto.addEventListener('click', open);
// closeModalFoto.addEventListener('click', close);

// function open() {
//     modal.classList.add('show');
//     modal.classList.remove('hide');
// }
// function close() {
//     modal.classList.add('hide');
//     modal.classList.remove('show');
// }
// ! /MODAL-1
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

closeFotoBtn1.addEventListener('click', () => {
    foto1.classList.add('closeFoto');
    foto1.classList.remove('openFoto');
    setTimeout(() => {
        foto1.classList.remove('closeFoto');
    }, 0010);
});

// Escape CLose
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        foto1.classList.add('closeFoto');
        foto1.classList.remove('openFoto');
        setTimeout(() => {
            foto1.classList.remove('closeFoto');
        }, 0010);

        foto2.classList.add('closeFoto');
        foto2.classList.remove('openFoto');
        setTimeout(() => {
            foto2.classList.remove('closeFoto');
        }, 0010);
    }
});

// const sidebar = document.querySelector('.content-sidebar');
// sidebar.addEventListener('click', (e) => {
//     if (e.target !== foto1) {
//         // console.log(e.target);
//         // console.log('done');
//         foto1.classList.add('closeFoto');
//         foto1.classList.remove('openFoto');
//         setTimeout(() => {
//             foto1.classList.remove('closeFoto');
//         }, 0010);
//     }
// });

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

closeFotoBtn2.addEventListener('click', () => {
    foto2.classList.add('closeFoto');
    foto2.classList.remove('openFoto');
    setTimeout(() => {
        foto2.classList.remove('closeFoto');
    }, 0010);
});
//! /OPEN FOTO
// foto.addEventListener('mouseover', () => {
//     foto.classList.add('hover');
//     li.style.color = 'red';
// });
foto1.onmouseover = function () {
    foto1.classList.add('hover');
    li1.style.color = 'rgb(255, 208, 0)';
};
foto1.onmouseout = function () {
    foto1.classList.remove('hover');
    li1.style.color = 'white';
};

li1.onmouseover = function () {
    foto1.classList.add('hover');
    li1.style.color = 'rgb(255, 208, 0)';
};
li1.onmouseout = function () {
    foto1.classList.remove('hover');
    li1.style.color = 'white';
};
// ++++
foto2.onmouseover = function () {
    this.classList.add('hover');
    li2.style.color = 'rgb(255, 208, 0)';
};
foto2.onmouseout = function () {
    this.classList.remove('hover');
    li2.style.color = 'white';
};

li2.onmouseover = function () {
    foto2.classList.add('hover');
    li2.style.color = 'rgb(255, 208, 0)';
};
li2.onmouseout = function () {
    foto2.classList.remove('hover');
    li2.style.color = 'white';
};
// ++++
foto3.onmouseover = function () {
    this.classList.add('hover');
    li3.style.color = 'rgb(255, 208, 0)';
};
foto3.onmouseout = function () {
    this.classList.remove('hover');
    li3.style.color = 'white';
};

li3.onmouseover = function () {
    foto3.classList.add('hover');
    li3.style.color = 'rgb(255, 208, 0)';
};
li3.onmouseout = function () {
    foto3.classList.remove('hover');
    li3.style.color = 'white';
};
// ++++++
foto4.onmouseover = function () {
    this.classList.add('hover');
    li4.style.color = 'rgb(255, 208, 0)';
};
foto4.onmouseout = function () {
    this.classList.remove('hover');
    li4.style.color = 'white';
};

li4.onmouseover = function () {
    foto4.classList.add('hover');
    li4.style.color = 'rgb(255, 208, 0)';
};
li4.onmouseout = function () {
    foto4.classList.remove('hover');
    li4.style.color = 'white';
};
// foto4.addEventListener('click', function (e) {
//     console.log(e.target);
// });
