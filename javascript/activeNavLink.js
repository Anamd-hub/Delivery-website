// Function to set active link based on current URL
function setActiveNavLink() {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", setActiveNavLink);
