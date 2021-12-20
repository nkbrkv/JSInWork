const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// // console.dir(btns[0].classList.item(1));
// console.dir(btns[0].classList.add('red'));
// console.dir(btns[0].classList.remove('blue'));
// console.dir(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

console.log(btns[0].className);