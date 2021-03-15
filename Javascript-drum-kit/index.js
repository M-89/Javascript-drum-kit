"use strict";

// Sélectionne toutes les divs avec classe key

const divs = document.querySelectorAll(".key");

// Fonction pour jouer le son en fonction de la touche sur laquelle on appuie

const playSound = (div, event) => {
  // console.log(div.getAttribute("data-key"));

  console.log(event);
};

// Pour chaque div dans la nodelist des divs on met un écouteur d'évènement sur le clavier

divs.forEach((div, event) => {
  div.addEventListener("keydown", playSound(div, event));
});

window.addEventListener("keydown", event => {
  console.log(event);
});

// Sélectionner les divs des touches et crée un tableau avec

const keys = document.querySelectorAll(".key");

// Faire jouer les sons en appuyant sur les touches, et mettre l'animation sur la bonne div en fonction de celle sur laquelle on appuie. Stopper l'animation au bout de 50 ms.

/* window.addEventListener("keydown", e => {
  switch (e.keyCode) {
    case 65:
      audioKick.currentTime = 0;
      audioKick.load();
      audioKick.play();
      keys[0].classList.add("playing");
      setTimeout(() => {
        keys[0].classList.remove("playing");
      }, 50);
      break;
    case 83:
      audioSnare.currentTime = 0;
      audioSnare.load();
      audioSnare.play();
      keys[1].classList.add("playing");
      setTimeout(() => {
        keys[1].classList.remove("playing");
      }, 50);
      break;
    case 68:
      audioCh.currentTime = 0;
      audioCh.load();
      audioCh.play();
      keys[2].classList.add("playing");
      setTimeout(() => {
        keys[2].classList.remove("playing");
      }, 50);
      break;
    case 70:
      audioMh.currentTime = 0;
      audioMh.load();
      audioMh.play();
      keys[3].classList.add("playing");
      setTimeout(() => {
        keys[3].classList.remove("playing");
      }, 50);
      break;
    case 71:
      audioOh.currentTime = 0;
      audioOh.load();
      audioOh.play();
      keys[4].classList.add("playing");
      setTimeout(() => {
        keys[4].classList.remove("playing");
      }, 50);
      break;
    case 72:
      audioClap.currentTime = 0;
      audioClap.load();
      audioClap.play();
      keys[5].classList.add("playing");
      setTimeout(() => {
        keys[5].classList.remove("playing");
      }, 50);
      break;
    case 74:
      audioHighTom.currentTime = 0;
      audioHighTom.load();
      audioHighTom.play();
      keys[6].classList.add("playing");
      setTimeout(() => {
        keys[6].classList.remove("playing");
      }, 50);
      break;
    case 75:
      audioMidTom.currentTime = 0;
      audioMidTom.load();
      audioMidTom.play();
      keys[7].classList.add("playing");
      setTimeout(() => {
        keys[7].classList.remove("playing");
      }, 50);
      break;
    case 76:
      audioLowTom.currentTime = 0;
      audioLowTom.load();
      audioLowTom.play();
      keys[8].classList.add("playing");
      setTimeout(() => {
        keys[8].classList.remove("playing");
      }, 50);
      break;
  }
}); */

// KeyboardEvent.keyCode est déprécié, mieux vaut utiliser KeyboardEvent.code. J'ai utilisé KeyboardEvent.keyCode car les keycodes étaient mappés en fonction de cet event dans le HTML. Les mappings (les numéros / noms des touches) sont différents avec KeyboardEvent.code donc je n'ai pas voulu tout changer dans le HTML.
