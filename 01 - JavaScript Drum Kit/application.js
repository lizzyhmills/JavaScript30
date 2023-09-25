let keys = document.getElementsByClassName("key")
console.log(keys)
const sounds = document.querySelectorAll("audio")
console.log(sounds[0].dataset.key)

window.addEventListener('keydown', function(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio)
  if (!audio) return;
  audio.play()
});
