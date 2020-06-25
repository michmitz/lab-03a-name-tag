const pinkButton = document.getElementById('pinkbutton');
console.log('Pink')
pinkButton.addEventListener('click', () => { 
    const PinkColorTop = document.getElementById('headerbackground');
    PinkColorTop.style.background = 'pink';
    const PinkColorBottom = document.getElementById('footerbackground');
    PinkColorBottom.style.background = 'pink';
})

