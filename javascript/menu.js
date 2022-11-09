const navToggle = document.querySelector(".icon");
const navMenu = document.querySelector(".content_menu_mobil");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-mobil-visible");
})