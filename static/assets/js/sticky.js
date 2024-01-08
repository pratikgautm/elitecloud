
    window.onscroll = function() {myFunction()};

var navbar = document.getElementById("main-navbar");
var sticky = navbar.offsetTop;

function myFunction() {
if (window.pageYOffset >= 100) {
  navbar.classList.add("sticky")
} else {
  navbar.classList.remove("sticky");
}
}