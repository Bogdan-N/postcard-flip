document.addEventListener('DOMContentLoaded', function () {
  var frontCard = document.getElementById('cardFront');
  var backCard = document.getElementById('cardBack');
  var wrapper = document.getElementById('cardWrapper');
  var card = document.getElementsByClassName('card')[0];
  var music = document.getElementById("myAudio");
  var stopped = false;

  function isFuckingIE() {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    return (msie > 0 || window.navigator.userAgent.indexOf('Trident/') > 0);
  }

  frontCard.addEventListener("click", function (event) {
    wrapper.classList.add("active");
    card.classList.add("flipped");
    if (isFuckingIE()) {
      setTimeout(function () {
        backCard.style['backface-visibility'] = 'visible';
      }, 450);
    }

    if (!stopped) {
      music.play();
    }
  });

  backCard.addEventListener("click", function (event) {
    event.stopPropagation();
    wrapper.classList.remove("active");
    card.classList.remove("flipped");
    if (isFuckingIE()) {
      setTimeout(function () {
        backCard.style['backface-visibility'] = 'hidden';
      }, 450);
    }
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
