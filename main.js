const menuToggle = document.querySelector('#menu-toggle');
const mobMenu = document.querySelector('.mob-menu');

menuToggle.addEventListener('click', function() {
   mobMenu.classList.toggle('toggle');
});

menuToggle.addEventListener("keypress", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    mobMenu.classList.toggle('toggle');
  }
});