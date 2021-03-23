// Sélectionne toutes les divs avec la classe key

const divs = document.querySelectorAll(".key");

let audioFiles = document.querySelectorAll("audio");

// On met un écouteur d'évènement sur la window qui écoute les touches du clavier

window.addEventListener("keydown", event => {
  playSound(event);
});

// Fonction pour jouer le son en fonction de la touche sur laquelle on appuie

const playSound = event => {
  // On itère sur les divs
  divs.forEach(div => {
    if (div.dataset.key == event.keyCode) {
      // Si on trouve une div qui a le même dataset.key que le numéro de la touche
      audioFiles.forEach(audioFile => {
        // On itère sur les fichiers audio
        if (audioFile.dataset.key == event.keyCode) {
          // Si on trouve un fichier audio qui a le même dataset.key que le numéro de la touche on joue le fichier audio correspondant, et on lance la fonction pour changer le style sur la div correspondante
          audioFile.currentTime = 0; // Rembobine le son
          audioFile.play(); // Joue le son
          setStyle(div); // Change le style de la div
        }
      });
    }
  });
};

const setStyle = div => {
  // On ajoute la classe playing à la div
  div.classList.add("playing");

  // On écoute l'évènement "transitionend" sur la div
  div.addEventListener("transitionend", e => {
    // Si l'évènement "transitionend" est appelé sur la propriété transform on enlève la classe "playing"
    if (e.propertyName === "transform") {
      div.classList.remove("playing");
    }
  });
};
