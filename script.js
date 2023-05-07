const playBtn = document.getElementById('play');
const settingsBtn = document.getElementById('settings');
const creditsBtn = document.getElementById('credits');

let isSettingsOpen = false;
let isCreditsOpen = false;


// ajouter des événements de clic pour chaque bouton
playBtn.addEventListener('click', startGame);
settingsBtn.addEventListener('click', openSettings);
creditsBtn.addEventListener('click', showCredits);

function startGame() {
  // Créer le conteneur principal
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  container.style.height = '100vh';
  container.style.backgroundColor = '#f5f5f5';
  document.body.appendChild(container);

  // Créer le bouton de jeu
  const gameBtn = document.createElement('button');
  gameBtn.innerText = 'Cliquer pour obtenir des points';
  gameBtn.id = 'game-btn';
  gameBtn.style.padding = '20px';
  gameBtn.style.backgroundColor = '#0077cc';
  gameBtn.style.color = '#fff';
  gameBtn.style.borderRadius = '10px';
  gameBtn.style.cursor = 'pointer';
  container.appendChild(gameBtn);

  // Créer l'élément d'affichage du score
  const scoreDisplay = document.createElement('div');
  scoreDisplay.innerText = `Score : 0`;
  scoreDisplay.style.marginTop = '50px';
  container.appendChild(scoreDisplay);

  // Définir les variables du jeu
  let score = 0;
  let timeLeft = 20;

  // Ajouter des effets visuels de la souris sur le bouton de jeu
  gameBtn.addEventListener('mouseover', () => {
    gameBtn.style.backgroundColor = '#005daa';
  });

  gameBtn.addEventListener('mouseout', () => {
    gameBtn.style.backgroundColor = '#0077cc';
  });

  // Ajouter un événement de clic au bouton de jeu
  gameBtn.addEventListener('click', () => {
    // Ajouter un point au score
    score++;
    scoreDisplay.innerText = `Score : ${score}`;
  });

  // Lancer le compte à rebours
  const timer = setInterval(() => {
    timeLeft--;
    if (timeLeft < 20) {
      timeDisplay.innerText = `Temps restant : 0${timeLeft}`;
    } else {
      timeDisplay.innerText = `Temps restant : ${timeLeft}`;
    }

    // Vérifier si le temps est écoulé
    if (timeLeft === 0) {
      clearInterval(timer);
      container.removeChild(gameBtn);
      container.removeChild(scoreDisplay);
      container.removeChild(timeDisplay);
      alert(`Temps écoulé ! Votre score est de ${score} points.`);
    }
  }, 1000);

  // Créer l'élément d'affichage du temps restant
  const timeDisplay = document.createElement('div');
  timeDisplay.innerText = `Temps restant : 10`;
  timeDisplay.style.marginTop = '50px';
  container.appendChild(timeDisplay);
}


function openSettings() {
	if (isSettingsOpen) {
		return; // ne rien faire si la boîte de dialogue de paramètres est déjà ouverte
	}

	const settingsModal = document.createElement('div');
	settingsModal.id = 'settings-modal';
	

	const closeButton = document.createElement('button');
	closeButton.innerText = 'Fermer';
	closeButton.addEventListener('click', () => {
		document.body.removeChild(settingsModal);
		isSettingsOpen = false;
	});

	const title = document.createElement('h2');
	title.innerText = 'Paramètres';

	const volumeLabel = document.createElement('label');
	volumeLabel.for = 'volume-slider';
	volumeLabel.innerText = 'Volume : ';

	const volumeSlider = document.createElement('input');
	volumeSlider.type = 'range';
	volumeSlider.id = 'volume-slider';
	volumeSlider.min = 0;
	volumeSlider.max = 100;
	volumeSlider.value = 50;

	settingsModal.appendChild(closeButton);
	settingsModal.appendChild(title);
	settingsModal.appendChild(volumeLabel);
	settingsModal.appendChild(volumeSlider);

	document.body.appendChild(settingsModal);

	isSettingsOpen = true;
	isCreditsOpen = false;
}

function showCredits() {
	if (isCreditsOpen) {
		return; // ne rien faire si la boîte de dialogue de crédits est déjà ouverte
	}

	const creditsModal = document.createElement('div');
	creditsModal.id = 'credits-modal';

	const closeButton = document.createElement('button');
	closeButton.innerText = 'Fermer';
	closeButton.addEventListener('click', () => {
		document.body.removeChild(creditsModal);
		isCreditsOpen = false;
	});

	const title = document.createElement('h2');
	title.innerText = 'Crédits';

	const content = document.createElement('p');
	content.innerText = 'Crédits du jeu';

	creditsModal.appendChild(closeButton);
	creditsModal.appendChild(title);
	creditsModal.appendChild(content);

	document.body.appendChild(creditsModal);

	isSettingsOpen = false;
	isCreditsOpen = true;
}
