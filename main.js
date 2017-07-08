var responsiveNav = document.getElementById("responsive-nav");
var menuIcon = document.getElementsByClassName("button");

for (var i = 0; i < menuIcon.length; i++) {
  menuIcon[i].addEventListener("click", function () {
    responsiveNav.classList.toggle("toggle-nav");
  })
}
