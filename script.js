document.addEventListener('DOMContentLoaded', function () {
  var frontCard = document.getElementById('cardFront');
  var wrapper = document.getElementById('cardWrapper');
  var card = document.getElementsByClassName('card')[0];
  var music = document.getElementById("myAudio");
  var stopped = false;

  frontCard.addEventListener("click", function (event) {
     wrapper.classList.add("active");
    card.classList.add("flipped");
    if (!stopped) {
      music.play();
    }
  });

  var backCard = document.getElementsByClassName('back')[0];

  backCard.addEventListener("click", function (event) {
    event.stopPropagation();
    wrapper.classList.remove("active");
    card.classList.remove("flipped");
  });

  var soundImgWrapper = document.getElementsByClassName('img-wrapper')[0];
  var soundButton = document.getElementById('soundButton');

  soundButton.addEventListener("click", function (event) {
    if (stopped) {
      music.play();
      soundImgWrapper.classList.remove("muted");
    } else {
      music.pause();
      soundImgWrapper.classList.add("muted");
    }
    stopped = !stopped;
  });
});
