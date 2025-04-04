// smooth scrolling
const links = document.querySelectorAll(".nav-bar li a");

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function showSidebar() {
  // this function shows the sidebar
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex"
}
function hideSidebar() {
  // this function hides the sidebar
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none"
}

// this function gets the current year and sets it in the footer
// it is used to avoid having to update the year manually
document.getElementById("currentYear").textContent = new Date().getFullYear();