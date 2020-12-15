//First Row
let peach = document.getElementById('peach');
let chipotleSound = document.querySelector('#chipotle-sound');

let trouble = document.getElementById('trouble');
let crySound = document.querySelector('#cry-sound');

let sad = document.getElementById('sad');
let textSound = document.querySelector('#text-sound');

let  hand = document.getElementById('hand');
let  likesSound = document.querySelector ('#likes-sound');

let  notebook = document.getElementById('notebook');
let  notebookSound = document.querySelector ('#notebook-sound');

//Second Row
let buzzfeed = document.getElementById('buzzfeed');
let buzzfeedSound = document.querySelector ('#buzzfeed-sound');

let starb = document.getElementById('starb');
let starbSound = document.querySelector('#starb-sound');



let winenight = document.getElementById('winenight');
let winenightSound = document.querySelector ('#winenight-sound');

let  tired = document.getElementById('tired');
let  diealoneSound = document.querySelector ('#diealone-sound');

//LISTENER
//First Row 
peach.addEventListener("click", function( event ) {
  chipotleSound.play();
}, false);

trouble.addEventListener("click", function( event ) {
  crySound.play();
}, false);

sad.addEventListener("click", function( event ) {
  textSound.play();
}, false);

hand.addEventListener("click", function( event ) {
  likesSound.play();
}, false);

notebook.addEventListener("click", function( event ) {
  notebookSound.play();
}, false);

//Second Row
buzzfeed.addEventListener("click", function( event ) {
  buzzfeedSound.play();
}, false);

starb.addEventListener("click", function( event ) {
    starbSound.play();
  }, false);
  

  winenight.addEventListener("click", function( event ) {
    winenightSound.play();
  }, false);

  tired.addEventListener("click", function( event ) {
    diealoneSound.play();
  }, false);

