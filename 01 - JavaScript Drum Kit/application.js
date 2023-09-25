let keys = document.getElementsByClassName("key")
console.log(keys)
const sounds = document.querySelectorAll("audio")
console.log(sounds[0].dataset.key)

window.addEventListener('keydown', function(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  key.classList.remove('playing');
  audio.play();
  key.classList.add('playing');
  key.addEventListener("transitionend", () => {
    key.classList.remove('playing');
  });
});
