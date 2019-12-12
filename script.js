document.addEventListener('DOMContentLoaded', function () {
  var frontCard = document.getElementById('cardFront');
  var wrapper = document.getElementById('cardWrapper');
  var card = document.getElementsByClassName('card')[0];
  var music = document.getElementById("myAudio");

  frontCard.addEventListener("click", function () {
    wrapper.classList.add("active");
    card.classList.add("flipped");
    music.play();
  });

  var backCard = document.getElementsByClassName('back')[0];

  backCard.addEventListener("click", function (event) {
    event.stopPropagation();
    wrapper.classList.remove("active");
    card.classList.remove("flipped");
  });

  var soundButton = document.getElementById('soundButton');
  
  console.log('soundButton', soundButton);
  soundButton.addEventListener("click", function (event) {
    console.log('sound button');
    music.muted = !music.muted;
  });
});
