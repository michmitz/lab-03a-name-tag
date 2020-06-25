const pinkButton = document.getElementById('pinkbutton');
console.log('Pink')
pinkButton.addEventListener('click', () => { 
    const PinkColorTop = document.getElementById('headerbackground');
    PinkColorTop.style.background = 'pink';
    const PinkColorBottom = document.getElementById('footerbackground');
    PinkColorBottom.style.background = 'pink';
})

const greenButton = document.getElementById('greenbutton');
console.log('Green')
greenButton.addEventListener('click', () => { 
    const GreenColorTop = document.getElementById('headerbackground');
    GreenColorTop.style.background = 'lightgreen';
    const GreenColorBottom = document.getElementById('footerbackground');
    GreenColorBottom.style.background = 'lightgreen';
})

