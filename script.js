// When the user scrolls the page, execute myFunction
window.onscroll = function() {freeTheBar()};

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function freeTheBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}