const mainNav = document.querySelector('.mainParent');
const mainBtn = document.querySelector('.btn1');

//click listens 

mainNav.addEventListener('click', (event) => {
    console.log(event.target);
})

mainBtn.addEventListener('click', () => {
    console.log(mainNav);
})


function myMove(name, ang = 0, rad = 100, inT) {

    let id = null;
    const elem = document.querySelector(name);
    let angle = ang;
    let radius = rad; // Adjust the radius of the circular path
    clearInterval(id);
    id = setInterval(frame, inT);

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

function myMoveReverse(name, ang = 0, rad = 100, inT) {
    let id = null;
    const elem = document.querySelector(name);
    let angle = ang;
    let radius = rad; // Adjust the radius of the circular path
    clearInterval(id);
    id = setInterval(frame, inT);
  
    function frame() {
      if (angle <= 0) {
        angle = 360;
      } else {
        angle--;
        let radians = angle * (Math.PI / 180);
        let x = Math.cos(radians) * radius * -1; // Multiply with -1 to reverse the x-coordinate
        let y = Math.sin(radians) * radius * -1; // Multiply with -1 to reverse the y-coordinate
  
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
      }
    }
}



//middle
myMoveReverse('.class1', 0, 25, 1);

myMoveReverse('.class2', 5, 400, 5);
//blue
myMove('.class3', 8, 100, 4);
myMoveReverse('.class4', 5, 500, 6);
myMove('.class5', 6, 300, 1);
myMove('.class6', 1,600, 10);
myMoveReverse('.class7', 40, 250, 14);