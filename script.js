document.addEventListener('DOMContentLoaded', function () {
  var frontCard = document.getElementById('cardFront');
  var wrapper = document.getElementById('cardWrapper');
  var card = document.getElementsByClassName('card')[0];

  frontCard.addEventListener("click", function () {
    wrapper.classList.add("active");
    card.classList.add("flipped");
  });

  var backCard = document.getElementsByClassName('back')[0];

  backCard.addEventListener("click", function (event) {
    event.stopPropagation();
    wrapper.classList.remove("active");
    card.classList.remove("flipped");
  });
});
