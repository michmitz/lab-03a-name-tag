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

const blueButton = document.getElementById('bluebutton');
console.log('Blue')
blueButton.addEventListener('click', () => { 
    const blueColorTop = document.getElementById('headerbackground');
    blueColorTop.style.background = 'lightblue';
    const blueColorBottom = document.getElementById('footerbackground');
    blueColorBottom.style.background = 'lightblue';
})

const nameInput = document.getElementById('NameInput');
console.log('NameInput');

const nameButton = document.getElementById('NameButton');
console.log('NameButton');
nameButton.addEventListener('click', () => {
    const changeName = document.getElementById('namedisplay');
    const value = nameInput.value;
    changeName.textContent = value;
} )

