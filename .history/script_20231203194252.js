const textContent = document.getElementById('text-content');
const interactiveSection = document.getElementById('interactive-section');
const mainContent = document.getElementById('main-content');
// const h1Element = document.querySelector('#main-content h1');
// const pElement = document.querySelector('#main-content p');

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
        console.log('mainContent')
        interactiveSection.style.opacity = '0';
        interactiveSection.style.pointerEvents = 'none';
        mainContent.style.opacity = '1';

        // Ajout de la transition d'opacité pour h1 et p
        // Décommentez ces lignes si vous prévoyez d'utiliser h1Element et pElement
        // h1Element.style.opacity = '1';
        // setTimeout(() => {
        //   pElement.style.opacity = '1';
        // }, 300);
        break;
    }

    // Ajoutez une classe pour forcer l'affichage de #main-content
    mainContent.classList.add('display');

    // Rendre le nouveau contenu visible après une courte pause
    setTimeout(() => {
      mainContent.style.opacity = '1';
    }, 800); // 800ms correspond à la durée de la transition dans le style de texte
  }
});
