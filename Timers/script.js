document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('.btn');
    let i = 0;
    let timerId;

    function myAnimation() {
        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame, 10);

        function frame() {
            if (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    }

    btn.addEventListener('click', myAnimation);


    
    // const timerId = setTimeout( logger(), 2000);

    // function logger() {
    //     if (i == 3) {
    //         clearInterval(timerId);
    //     }
    //     console.log('text');
    //     i++;
    // }

    // let id = setTimeout( function log() {
    //     console.log('Hello');
    //     id = setTimeout(log, 500);
    // }, 500);

});

