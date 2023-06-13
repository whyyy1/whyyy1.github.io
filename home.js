


//Event listener when you click the middle of the screen
const middleClick  = document.querySelector('.Middle');
middleClick.addEventListener('click',( )=>{
    const colorList = ['red', 'green', 'blue', 'grey', 'purple', 'yellow', 'orange', 'pink', 'brown', 'cyan', 'magenta', 'teal', 'lime', 'olive', 'navy', 'maroon', 'gold', 'silver', 'indigo', 'violet', 'turquoise', 'coral', 'salmon', 'orchid', 'peru'];

    let randomColor = colorList[Math.floor(Math.random()*colorList.length)]
    
    middleClick.style.backgroundColor = randomColor;
    
})


const buttonClick = document.querySelector('.scrollBtn');
let lastKnownScrollPosition = 0;
let ticking = false

buttonClick.addEventListener('click', () => {
    const middleElement = document.querySelector('.Middle');
    
    console.log(middleElement);
});
