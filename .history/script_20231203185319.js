const textContent = document.getElementById('text-content');
const interactiveSection = document.getElementById('interactive-section');
const mainContent = document.getElementById('main-content');

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
      case '...Or anyone else from the team':
        textContent.innerText = 'Let me present you...';
        break;
      default:
        interactiveSection.style.overflow = 'scroll';
        break;
    }

    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 500);

  }
});