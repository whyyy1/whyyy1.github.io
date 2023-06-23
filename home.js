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
const htmlTags = [
    'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside',
    'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink',
    'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite',
    'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd',
    'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt',
    'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font',
    'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img',
    'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link',
    'listing', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta',
    'meter', 'nav', 'nobr', 'noframes', 'noscript', 'object', 'ol', 'optgroup',
    'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress',
    'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select',
    'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong',
    'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template',
    'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt',
    'u', 'ul', 'var', 'video', 'wbr'
];

const htmlProperties = [
    'class', 'id', 'style', 'src', 'href', 'alt', 'width', 'height', 'disabled',
    'value', 'placeholder', 'checked', 'selected', 'maxlength', 'readonly',
    'required', 'autoplay', 'controls', 'colspan', 'rowspan'
];
const delData = document.querySelector('.delData');
const textArea = document.querySelector(".textInput")
const addData = document.querySelector('.addData');
const linkShowing = document.querySelectorAll('.lc')
const aboutBtn = document.querySelector('.aboutLink')
const projectBtn = document.querySelector('.projectLink')
const contactBtn = document.querySelector('.contactLink')
const selectTagBtn = document.querySelector('.tagSelection')
const classTagBtn = document.querySelector('.classSelection')
const classValueTagBtn = document.querySelector('.classInput')
const EDITOR = document.querySelector(".edit")
const editorWindow = document.querySelector(".actionBtns")

let lastKnownScrollPosition = 0;
let ticking = false
let section;
let id;


//add all items in the htmlTags to the selectTagBtn
for(k of htmlTags){
    let optionTag = document.createElement('option');
    optionTag.value = k.toLowerCase()
    optionTag.textContent = k
    
    selectTagBtn.appendChild(optionTag)
    
}

for(f of htmlProperties){
    let optionTag = document.createElement('option');
    optionTag.value = f.toLowerCase()
    optionTag.textContent = f
    
    classTagBtn.appendChild(optionTag)
    
}

//button listeners 

for (i of linkShowing) {

    i.addEventListener('click', (event) => {
        // console.log(document.querySelector('#aboutSec').innerHTML)
        
        if (event.target.textContent === 'Project1') {
            section = '#aboutSec'
            id = 'aboutSec'
            // alert('About me clicked')

        }
        else if (event.target.textContent === 'Project2') {
            section = '#projectSec';
            id = 'projectSec';
            // alert('Project clicked')

        }
        else if (event.target.textContent === 'Project3') {
            section = '#contactSec'
            id = 'contactSec';
            // alert('Contact clicked');

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


EDITOR.addEventListener('click', (event) => {
    console.log(editorWindow.style.display)
    if(editorWindow.style.display === '' || editorWindow.style.display ==='none' || editorWindow.style.display === 'undefined'){
        editorWindow.style.display = 'block'
    }
    else if(editorWindow.style.display === 'block'){
        editorWindow.style.display = 'none'
    }
})

middleClick.addEventListener('click', () => {

    let randomColor = colorList[Math.floor(Math.random() * colorList.length)]
    middleClick.style.backgroundColor = randomColor;

})


addData.addEventListener('click', () => {
    const sectionOn = section;
    const sections = document.querySelectorAll('.sectionClass');
    console.log(selectTagBtn.value,classValueTagBtn.value)
    //add Data from textArea on click
    if(sectionOn){
        if(textArea.value !== ''){
            console.log(section,id)
        console.log(textArea.value)
        let createClass = document.createElement(selectTagBtn.value)
        createClass.innerText = textArea.value
        createClass.setAttribute(classTagBtn.value ,classValueTagBtn.value)
        document.querySelector(sectionOn).appendChild(createClass)
        // sectionOn.appendChild(createH1)
        textArea.value = ''
        classValueTagBtn.value = ''
        }else{
            alert('Please type something in before adding')
        }
    }else{
        alert("Please select a page you want to add the text to")
    }

    //change background on click
    let randomColor = colorList[Math.floor(Math.random() * colorList.length)]
    let randomSentence = randomSentences[Math.floor(Math.random() * randomSentences.length)]
    middleClick.style.color = randomColor;
   
});



delData.addEventListener('click', () => {
    const sectionOn = section;
    let delDataBtn = document.querySelector(sectionOn)
    console.log(delDataBtn)
    if(delDataBtn == null ||delDataBtn == '' ||delDataBtn == 'undefined' ){
        alert('No data to delete')
        
    }else{
        for(i of delDataBtn.children){
            if(i.className === 'addedClass'){
                console.log(i)
                i.remove()
                return
            }
            else{
                alert('Nothing to delete')
            }
        }

        
    }
    
    

})







// const aboutMark = `<h1>This is the About me section</h1><p>My name is Tieran Dysart and I am a self taught programmer. Currently in a 15 week bootcamp to become a Software Engineer<p>`
// document.querySelector('#aboutSec').innerHTML = aboutMark