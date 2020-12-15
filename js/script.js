
//click here btn
let clickhereBtn = document.querySelector('.btn')
let introSound = document.querySelector('#open-sound')

let playTheIntro= function() {
  introSound.play()
}
clickhereBtn.addEventListener('click', playTheIntro)

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

let tinder = document.getElementById('tinder');
let stalkSound = document.querySelector ('#stalk-sound');

let laugh = document.getElementById('laugh');
let datingSound = document.querySelector ('#dating-sound');

let starb = document.getElementById('starb');
let starbSound = document.querySelector('#starb-sound');

let tired = document.getElementById('tired');
let diealoneSound = document.querySelector('#diealone-sound');

//Third Row
let britt = document.getElementById('britt');
let ewwSound = document.querySelector('#eww-sound');

let kim = document.getElementById('kim');
let kimSound = document.querySelector('#kim-sound');

let winenight = document.getElementById('winenight');
let winenightSound = document.querySelector ('#winenight-sound');

let crest = document.getElementById('crest');
let crestSound = document.querySelector ('#crest-sound');

let bachelor = document.getElementById('bachelor');
let bachelorSound = document.querySelector ('#bachelor-sound');

//LISTENER
//First Row 
peach.addEventListener("click", function( event ) {
  chipotleSound.play();
})

trouble.addEventListener("click", function( event ) {
  crySound.play();
})

sad.addEventListener("click", function( event ) {
  textSound.play();
})

hand.addEventListener("click", function( event ) {
  likesSound.play();
})

notebook.addEventListener("click", function( event ) {
  notebookSound.play();
})

//Second Row
buzzfeed.addEventListener("click", function( event ) {
  buzzfeedSound.play();
})

tinder.addEventListener("click", function( event ) {
  stalkSound.play();
})

laugh.addEventListener("click", function( event ) {
  datingSound.play();
})

starb.addEventListener("click", function( event ) {
    starbSound.play();
  })

tired.addEventListener("click", function( event ) {
    diealoneSound.play();
  })
  
//Third Row
britt.addEventListener("click", function( event ) {
  ewwSound.play();
})

kim.addEventListener("click", function( event ) {
  kimSound.play();
}, false);

winenight.addEventListener("click", function( event ) {
    winenightSound.play();
  })

crest.addEventListener("click", function( event ) {
  crestSound.play();
})

bachelor.addEventListener("click", function( event ) {
  bachelorSound.play();
})




