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

//html code//
<div class="emoji smile active">🙂</div>
<div class="emoji wave">🤗</div>
<script src="app.js"></script>

//css code//
.emoji{
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  display:inline;
}

.smile{
  display: none;
}

.wave{
  display: none;
}

.active{
  display: block;
}
