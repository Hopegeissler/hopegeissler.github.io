const smileFace = document.querySelector ('.smile')
const waveFace = document.querySelector ('.wave')

smileFace.addEventListener('click', () => {
  if(waveFace.classList.contains('wave')){
    waveFace.classList.add('active'); 
    smileFace.classList.remove('active');
  }
});

waveFace.addEventListener('click', () => {
  if(smileFace.classList.contains('smile')){
    smileFace.classList.add('active');
    waveFace.classList.remove('active');
  }
});