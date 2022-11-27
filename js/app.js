const hentaiMusic = new Audio('audio/hentai.mp3')
const aboutBlock = document.getElementsByClassName('block__about')[0]
const profileBlock = document.getElementsByClassName('profile')[0]
const btnBlock = document.getElementsByClassName('btn-about')[0]
let more = document.getElementById('profile__more')
const clipBox = document.getElementById('clip-box')
const wrapper = document.getElementsByClassName('wrapper')[0]
const pics = [`img\\pics\\funny-mio.jpg`, `img\\pics\\hikaru.jpg`, `img\\pics\\cirilla.jpg`, `img\\pics\\anderarrest.jpg`, `img\\pics\\megumin.jpg`]
const picer =  document.getElementById('pic')
let changeThemeButtons = document.querySelectorAll('.change__theme');
let activeTheme = localStorage.getItem('theme');
let currentTheme = document.querySelector('[title="theme"]')
let love = document.getElementsByClassName('love')[0];

if (!(window.matchMedia("(min-width: 703px)").matches)) {
    profileBlock.style.position = "static"
    btnBlock.style.display = "none"
    aboutBlock.style.display = "none"
}

function clip(text) {
    navigator.clipboard.writeText(text);
    window.getSelection().removeAllRanges()
    clipBox.classList.toggle('active')
    setTimeout(() => {
        clipBox.classList.remove('active')
    }, 3000)
    
}

function displayBlock(block, block2) {
    block.style.display = 'block'
    setTimeout(() => {
        block.classList.toggle('active')
        block2.classList.toggle('active')
        btnBlock.classList.toggle('active')
    }, 0)
}
let count = 1;
picer.addEventListener('click', () => {
    picer.classList.toggle('fade')
    setTimeout(() => {
        picer.classList.remove('fade')
        picer.setAttribute('src', pics[count])
    }, 500)
    count += 1
    if(count === 5) {
        count = 0
    }
})

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let theme = this.dataset.theme;
        applyTheme(theme);
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
}

if(activeTheme === null || activeTheme === 'light') { 
    applyTheme('light');
} else if (activeTheme === 'dark') { 
    applyTheme('dark');
}

window.addEventListener("resize", function() {
    if (!(window.matchMedia("(min-width: 703px)").matches)) {
        profileBlock.style.position = "static"
        btnBlock.style.display = "none"
        aboutBlock.style.display = "none"
        
    }
    else{
        profileBlock.style.position = "absolute"
        btnBlock.style.display = "inline-block"
    }
})

document.addEventListener('animationstart', function (e) {
    if (e.animationName === 'fade-in') {
        e.target.classList.add('did-fade-in');
    }
});

document.addEventListener('animationend', function (e) {
    if (e.animationName === 'fade-out') {
        e.target.classList.remove('did-fade-in');
        if(love.style.opacity === '0') {
            love.style.display = 'none'
        }
    }
});


let clicksToAva = 0
picer.addEventListener('click', event => {
    clicksToAva+= 1
    console.log('Пасхалочка через: ' + (100-clicksToAva))
    if (clicksToAva === 10) {
        alert('Freestylooooo Time!~~~')
        hentaiMusic.play()
        clicksToAva = 0
    }
})