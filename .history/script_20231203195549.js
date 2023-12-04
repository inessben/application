const textContent = document.getElementById('text-content');
const interactiveSection = document.getElementById('interactive-section');
const mainContent = document.getElementById('main-content');
const h1Element = document.querySelector('#main-content h1');
const pElement = document.querySelector('#main-content p');

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
                console.log('mainContent');
                interactiveSection.style.opacity = '0';
                interactiveSection.style.pointerEvents = 'none';
                mainContent.style.opacity = '1';
                h1Element.style.opacity = '1';
                pElement.style.opacity = '1'; // Ajoutez cette ligne pour forcer l'affichage du paragraphe
                break;
        }

        mainContent.classList.add('display');

        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 800);
    }
});