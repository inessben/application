const textContent = document.getElementById('text-content');
const interactiveSection = document.getElementById('interactive-section');

document.addEventListener('keydown', function (event) {
if (event.code === 'Space') {
switch (textContent.innerText) {
case 'Hello Yousra':
textContent.innerText = 'Hello Yasmine';
break;
case 'Hello Yasmine':
textContent.innerText = 'Hello Chi Khanh';
break;
case 'Hello Chi Khanh':
textContent.innerText = '...Or anyone else from the team';
break;
default:
interactiveSection.style.overflow = 'scroll';
break;
}

// move the text to the left
textContent.style.transform = 'translateX(0)';
}
});