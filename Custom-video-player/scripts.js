// Récupérer les éléments, déclarer nos variables

const videoObject = document.querySelector(".player__video.viewer");

const playButton = document.querySelector(".player__button.toggle");

const volumeSlider = document.querySelector(".player__slider[name='volume']");

const playbackRateSlider = document.querySelector(
  ".player__slider[name='playbackRate']"
);

const backwardButton = document.querySelector(
  ".player__button[data-skip='-10']"
);

const forwardButton = document.querySelector(".player__button[data-skip='25']");

const progress = document.querySelector(".progress");

const progressFilled = document.querySelector(".progress__filled");

progressFilled.style.flexBasis = "0";

const fullscreenButton = document.querySelector(
  ".fullscreen[title='Toggle Fullscreen']"
);

const playerDiv = document.querySelector(".player");

// Faire les fonctions

// Jouer la vidéo

function play() {
  // Si la vidéo est en pause, on lance la vidéo. Si elle est en train de jouer, on la met sur pause.
  if (videoObject.paused) {
    videoObject.play();
  } else {
    videoObject.pause();
  }
}

// Changer le volume

function changeVolume() {
  videoObject.volume = volumeSlider.value;
}

// Reculer de 10 secondes

function back10Seconds() {
  videoObject.currentTime -= 10;
}

// Avancer de 25 secondes

function forward25Seconds() {
  videoObject.currentTime += 25;
}

// Changer vitesse de lecture

function changePlaybackRate() {
  videoObject.playbackRate = playbackRateSlider.value;
}

// Faire la barre de progression

function fillProgressBar() {
  if (
    !videoObject.paused &&
    !videoObject.ended &&
    videoObject.currentTime > 0
  ) {
    // On divise le temps du moment où on est dans la vidéo par le temps total de la vidéo. On obtient un nombre du genre 0.012439203688181055

    let percentComplete = videoObject.currentTime / videoObject.duration;

    // Quand on le multiplie par 100 on arrive au pourcentage de vidéo joué. On utilise ce pourcentage pour augmenter les % du Flex-basis de la barre de progression.

    progressFilled.style.flexBasis = `${percentComplete * 100}%`;

    // Quand la vidéo est terminée la barre revient à un Flex-basis de 0, ce qui laisse voir la barre noire en dessous.
  } else if (videoObject.ended) {
    progressFilled.style.flexBasis = 0;
  }
}

// Avancer ou reculer manuellement dans la vidéo en cliquant sur la barre de progression, et en cliquant et en bougeant la souris

function changeProgress(event) {
  progressFilled.style.flexBasis = `${event.offsetX}px`;

  // On divise l'offsetX de l'évènement sur la barre (l'endroit où on a cliqué) par sa largeur totale, on a un chiffre genre 0.540625. On multiplie ce chiffre par la durée totale de la vidéo, ex : on a une vidéo de 60 secondes, si on clique au milieu ça nous amènera à 30 secondes.

  let newTime = (event.offsetX / progress.offsetWidth) * videoObject.duration;

  videoObject.currentTime = newTime;
}

// Changer le bouton Play en bouton Pause quand la vidéo joue

function changePlayButton() {
  if (videoObject.paused) {
    playButton.textContent = "►";
  } else {
    playButton.textContent = "❚ ❚";
  }
}

// Passer en plein écran quand on appuie sur le bouton

function switchToFullscreen() {
  // On demande le Fullscreen sur la div parente du player vidéo
  playerDiv.requestFullscreen();
  // On demande à la vidéo de prendre toute la place de son parent
  videoObject.style.width = "100%";
  videoObject.style.height = "100%";
  // Si on est en Fullscreen, on le quitte quand on réappuie sur le bouton
  if (document.fullscreenElement != null) {
    document.exitFullscreen();
  }
}

// Brancher les eventListeners

// eventListeners pour lancer la vidéo quand on clique sur le bouton Play, et quand on clique sur l'écran de la vidéo

playButton.addEventListener("click", play);

videoObject.addEventListener("click", play);

// Pour le slider de volume et l'autre slider, on utilise l'event "input", car il se déclenche chaque fois que la valeur de l'input change. L'event "change" ne se déclenche qu'après qu'un élément ait fini de changer.

volumeSlider.addEventListener("input", changeVolume);

backwardButton.addEventListener("click", back10Seconds);

forwardButton.addEventListener("click", forward25Seconds);

playbackRateSlider.addEventListener("input", changePlaybackRate);

videoObject.addEventListener("timeupdate", fillProgressBar);

videoObject.addEventListener("play", changePlayButton);

videoObject.addEventListener("pause", changePlayButton);

let mouseDown = false;

progress.addEventListener("click", changeProgress);

// Pour le cliquer et bouger pour changer la progression. Quand on bouge la souris, on vérifie si mouseDown est true, oui alors on lance la fonction changeProgress. On passe l'event du mousemove à changeProgress car elle en a besoin. Si mouseDown est faux, alors rien ne se passe, on ne passe pas à la fonction changeProgress.

videoObject.addEventListener(
  "mousemove",
  event => mouseDown && changeProgress(event)
);

progress.addEventListener("mousedown", () => (mouseDown = true));

progress.addEventListener("mouseup", () => (mouseDown = false));

fullscreenButton.addEventListener("click", switchToFullscreen);
