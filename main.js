const mainNav = document.querySelector('.mainParent');
const mainBtn = document.querySelector('.btn1');

mainBtn.addEventListener('click', () => {
    console.log(mainNav);
})


function myMove(name, ang = 0, rad = 100, pm) {

    let id = null;
    const elem = document.querySelector(name);
    let angle = ang;
    let radius = rad; // Adjust the radius of the circular path
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (angle >= 360) {
            angle = 0;
        } else {
            angle++;
            let radians = angle * (Math.PI / 180);
            let x = Math.cos(radians) * radius;
            let y = Math.sin(radians) * radius;

            elem.style.left = x + 'px';
            elem.style.top = y + 'px';
        

    }
}
  }

myMove('.class1', 0, 25, 'p');
myMove('.class2', 5, 400, 'p');
myMove('.class3', 5, 100, 'm');