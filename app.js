const pinkButton = document.getElementById('pinkbutton');
console.log('Pink')
pinkButton.addEventListener('click', () => { 
    const PinkColor = document.getElementById('backgroundtochange');
    PinkColor.style.background = 'pink';
})