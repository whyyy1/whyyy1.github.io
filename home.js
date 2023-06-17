



//Event listener when you click the middle of the screen
let showing = false;
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
    for (i of sections) {
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
    for (i of sections) {
        delData.remove()
        console.log(i)
    }

})


//button listeners 

const linkShowing = document.querySelectorAll('.lc')
const aboutBtn = document.querySelector('.aboutLink')
const projectBtn = document.querySelector('.projectLink')
const contactBtn = document.querySelector('.contactLink')

for (i of linkShowing) {

    i.addEventListener('click', (event) => {
        // console.log(document.querySelector('#aboutSec').innerHTML)
        let section;
        let id;
        if (event.target.textContent === 'About Me') {
            section = '#aboutSec'
            id = 'aboutSec'

        }
        else if (event.target.textContent === 'Projects') {
            section = '#projectSec';
            id = 'projectSec'
        }
        else if (event.target.textContent === 'Contact') {
            section = '#contactSec'
            id = 'contactSec'
        }
        for (j of document.querySelector('.Middle').children) {

            if (j.classList.value === 'active') {
                console.log(j.classList.value)
                console.log(j, id)
                if (j.id !== id) {
                    j.classList.value = ''
                    j.style.display = 'none';
                    showing = false
                }
            }
        }
        if (!showing && (document.querySelector(section).style.display === 'none' || document.querySelector(section).style.display === '')) {

            document.querySelector(section).style.display = 'block'
            document.querySelector(section).classList.add('active')
            showing = true

        }

        // console.log(document.querySelector('#aboutSec').style.display,showing)
        else if (showing) {
            if ((document.querySelector(section).style.display === '' || document.querySelector(section).style.display === 'block')) {
                document.querySelector(section).style.display = 'none'
                showing = false
            }

            // event.target.querySelector(section).style.display = 'none'
            // showing = false
        }
        // console.log(section,document.querySelector(section).style.display,showing)
        // console.log(document.querySelector(section))

    })

}
const aboutMark = `<h1>This is the About me section</h1><p>My name is Tieran Dysart and I am a self taught programmer. Currently in a 15 week bootcamp to become a Software Engineer`
document.querySelector('#aboutSec').innerHTML = aboutMark