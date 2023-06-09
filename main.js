const mainNav = document.querySelector('.mainParent');
const mainBtn = document.querySelector('.btn1');


const COLORS = ["red", "orange", "yellow", "green", "blue",
  "indigo", "violet", "pink", "purple", "brown",
  "black", "white", "gray", "silver", "gold",
  "maroon", "navy", "teal", "olive", "coral",
  "magenta", "lime", "cyan", "peach", "turquoise"]
const PRESET = [
  "position",
  "height",
  "width",
  "bottom",
  "right",
  "border-radius",
  
]
const style1 = [
   "absolute",
   "17vw",
   "18vw",
   '5vw',
    '0vw',
    '50%',
]
const style2 = [
  "absolute",
  "7vw",
  "8vw",
  '15vw',
   '0vw',
   '50%',
]
const style3 = [
  "absolute",
  "10vw",
  "11vw",
  '5vw',
   '0vw',
   '50%',
]
const style4 = [
  "absolute",
  "17vw",
  "18vw",
  '5vw',
   '0vw',
   '50%',
]
const style5 = [
  "absolute",
  "17vw",
  "18vw",
  '5vw',
   '0vw',
   '50%',
]
//click listens 

mainNav.addEventListener('click', (event) => {
  console.log(event.target);
})

mainBtn.addEventListener('click', () => {
  
  let total = (mainNav.children.length) + 1;
  const newDiv = document.createElement('div')
  newDiv.setAttribute('class', `class${total}`)
  let ranAng = Math.floor(Math.random() * 6)
  let ranRad = Math.floor(Math.random() * 800)
  let ranIntv = Math.floor(Math.random() * 4)
  let ranRot = Math.floor(Math.random() * 2)
  console.log(ranAng, ranRad, ranIntv, ranRot)
  
  if (ranRot === 0) {
    myMove(newDiv.className, ranAng, ranRad, ranIntv)
  }
  if (ranRot === 1) {
    myMoveReverse(newDiv.className, ranAng, ranRad, ranIntv)
  }
  for(i in PRESET){
    let mainPreset  = PRESET[i]
    // console.log(newDiv.style.mainPreset)
    console.log(newDiv.mainPreset)
    // newDiv.mainPreset  = `"${style1[i]}"`
    // console.log(newDiv.mainPreset)
  }
  // console.log(newDiv.style.position)
  // mainNav.appendChild(newDiv)
  
  
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
myMove('.class6', 1, 600, 10);
myMoveReverse('.class7', 4, 250, 5);