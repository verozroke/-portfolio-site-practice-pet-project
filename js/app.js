const ellen = `love ellen <3`

let button = document.getElementsByClassName('clipboard-icons__telegram')[0]


let more = document.getElementById('profile__more')
more.innerHTML = ellen
more.addEventListener('mouseout', () => {
    if (more.classList.contains('hidden')) {
        more.classList.remove('hidden')
        setTimeout(() =>{
        more.classList.remove('visuallyhidden')
        }, 20)
    }
    more.style.display = 'none'
}, false);


more.addEventListener('mouseover', () => {
    more.classList.add('visuallyhidden')    
    more.addEventListener('transitionend', function(e) {
        more.classList.add('hidden')
    }, {
        capture: false,
        once: true,
        passive: false
    });
})

const clipBox = document.getElementById('clip-box')


function clip(text) {
    navigator.clipboard.writeText(text);
    window.getSelection().removeAllRanges()
    clipBox.classList.toggle('active')
    setTimeout(() => {
        clipBox.classList.remove('active')
    }, 3000)
    
}

const aboutBlock = document.getElementsByClassName('block__about')[0]
const profileBlock = document.getElementsByClassName('profile')[0]
const btnBlock = document.getElementsByClassName('btn-about')[0]

function displayBlock(block, block2) {
    block.classList.toggle('active')
    block2.classList.toggle('active')
    btnBlock.classList.toggle('active')
}

const pics = [`img\\pics\\funny-mio.jpg`, `img\\pics\\hikaru.jpg`, `img\\pics\\cirilla.jpg`, `img\\pics\\inabakumori.jpg`, `img\\pics\\anderarrest.jpg`, `img\\pics\\megumin.jpg`]


const picer =  document.getElementById('pic')
let count = 0;
picer.addEventListener('click', () => {
    picer.setAttribute('src', pics[count])
    count += 1
    if(count === 5) {
        count = 0
    }
})

