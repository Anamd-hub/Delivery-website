document.addEventListener("scroll", function () {
  var nav = document.getElementById("mainNavbar");
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
