


//Event listener when you click the middle of the screen
const middleClick = document.querySelector('.Middle');
const colorList = ['red', 'green', 'blue', 'grey', 'purple', 'yellow', 'orange', 'pink', 'brown', 'cyan', 'magenta', 'teal', 'lime', 'olive', 'navy', 'maroon', 'gold', 'silver', 'indigo', 'violet', 'turquoise', 'coral', 'salmon', 'orchid', 'peru'];
const randomSentences = [
    "<h3>This is a placeholder text</h3><span></span><p>Lorem ipsum dolor sit amet.</p>",
    "<h3>Remember to update this section later</h3><span></span><p>Lorem ipsum dolor sit amet.</p>",
    "<h3>Here's an interesting fact to include</h3><span></span><p>Lorem ipsum dolor sit amet.</p>",
    "<h3>Add a relevant image here</h3><span></span><p>Lorem ipsum dolor sit amet.</p>",
    "<h3>Don't forget to cite your sources</h3><span></span><p>Lorem ipsum dolor sit amet.</p>"
  ];

middleClick.addEventListener('click', () => {
    
    let randomColor = colorList[Math.floor(Math.random() * colorList.length)]
    middleClick.style.backgroundColor = randomColor;

})


const addData = document.querySelector('.addData');
let lastKnownScrollPosition = 0;
let ticking = false

addData.addEventListener('click', () => {
    const sections = document.querySelectorAll('.sectionClass'); 
    console.log(sections)
    
    
    let randomColor = colorList[Math.floor(Math.random() * colorList.length)]
    let randomSentence = randomSentences[Math.floor(Math.random() * randomSentences.length)]
    middleClick.style.color = randomColor;
    for(i of sections){
        let addHeader = document.createElement('h3')
        addHeader.innerHTML = randomSentence
        addHeader.classList.add('h3Added')
        console.log(addHeader)
        i.appendChild(addHeader)

    }

    
});

const delData = document.querySelector('.delData');

delData.addEventListener('click', () => {
    const sections = document.querySelectorAll('.sectionClass'); 
    let delData = document.querySelector('.h3Added')
    console.log(delData)
    for(i of sections){
        delData.remove()
        console.log(i)
    }
    
})


const anchorLinks = document.querySelectorAll('.navLinks')


document.addEventListener('click', (event) => {
        
    const targetText = event.target.text
    console.log(targetText)
    if(targetText === 'About Me'){
        console.log( document.querySelector("#aboutSec").style.display)
        if (document.querySelector("#aboutSec").style.display === "none") {
            document.querySelector("#aboutSec").style.display = "block";
          } else {
            document.querySelector("#aboutSec").style.display = "none";
          }
        
    }
    else if(targetText === 'Projects'){document.querySelector("#projectSec").style.display = 'inline-block'}
    else if(targetText === 'Contact'){document.querySelector("#contactSec").style.display = 'inline-block'}
})