function rollDice() {
  playAudio("roll_dice_sound_effect", 1);
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach((die) => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playAudio(id, vol) {
  document.getElementById(id).volume = vol;
  document.getElementById(id).play();
}

document.getElementById("roll-button").addEventListener("click", rollDice);
document.getElementById("mark_six").volume = 0.1;

document.addEventListener("keydown", function () {
  if (event.key === " ") {
    playAudio("misshk", 1);
  }
  if (event.key === "Control") {
    playAudio("mario", 0.5);
  }
  if (event.key === "Enter") {
    playAudio("mark_six", 0.05);
  }
  if (event.key === "Escape") {
    var sounds = document.getElementsByTagName("audio");
    for (i = 1; i < sounds.length; i++) {
      sounds[i].pause();
      sounds[i].currentTime = 0;
      // sounds[i].ended();
    }
  }
});
