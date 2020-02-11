const body = document.querySelector('body');
const dynaDiv = document.querySelector('#dynaDiv');

body.addEventListener('click', (e)=> {
    const windowWidth = e.view.innerHeight;
    const windowHeight = e.view.innerHeight;
    const pageX = e.clientX;
    const pageY = e.clientY;
    let pageLeft = pageX;
    let pageTop = pageY;

    if(windowWidth - pageX < dynaDiv.clientWidth) {
        pageLeft = windowWidth - (windowWidth - pageX + dynaDiv.clientWidth);
    }
    if(windowHeight - pageY < dynaDiv.clientHeight) {
        pageTop = windowHeight - (windowHeight - pageY + dynaDiv.clientHeight);
    }
    dynaDiv.style.left = `${pageLeft}px`;
    dynaDiv.style.top = `${pageTop}px`;
    dynaDiv.style.display = 'block';
});

