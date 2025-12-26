
function playSound(note) {
  const audio = new Audio(`./sounds/${note}.mp3`);
  audio.currentTime = 0;
  audio.play();
}

function activateKey(note) {
  const keyEl = document.querySelector(`.key[data-note="${note}"]`);
  if (!keyEl) return;

  keyEl.classList.add('active');
  setTimeout(() => keyEl.classList.remove('active'), 120);
}


const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.dataset.note;
    playSound(note);
    activateKey(note);
  });
});


const keyMap = {
  a: 'C',
  w: 'Csharp',
  s: 'D',
  e: 'Dsharp',
  d: 'E',
  f: 'F',
  t: 'Fsharp',
  g: 'G',
  y: 'Gsharp',
  h: 'A',
  u: 'Asharp',
  j: 'B'
};


document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (keyMap[key]) {
    playSound(keyMap[key]);
    activateKey(keyMap[key]);
  }
});
