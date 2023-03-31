// var typed = new Typed(".input", {
//   strings: ["Kelvin Owit", "A Frontend Developer", "A Web Developer"],
//   typedSpeed: 70,
//   backSpeed: 65,
//   loop: true,
// });

// hamburger menu
var hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("Active");
};
