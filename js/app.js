let more = document.getElementById('profile__more')

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
    block.style.display = 'block'
    setTimeout(() => {
        block.classList.toggle('active')
        block2.classList.toggle('active')
        btnBlock.classList.toggle('active')
    }, 0)
}

const pics = [`img\\pics\\funny-mio.jpg`, `img\\pics\\hikaru.jpg`, `img\\pics\\cirilla.jpg`, `img\\pics\\anderarrest.jpg`, `img\\pics\\megumin.jpg`]



const picer =  document.getElementById('pic')
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


let changeThemeButtons = document.querySelectorAll('.change__theme');
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


let activeTheme = localStorage.getItem('theme');

if(activeTheme === null || activeTheme === 'light') { 
    applyTheme('light');
} else if (activeTheme === 'dark') { 
    applyTheme('dark');
}


let love = document.getElementsByClassName('love')[0];

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
