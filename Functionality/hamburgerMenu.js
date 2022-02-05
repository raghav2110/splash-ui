//Suit Menu Sidebar
let landingMenu = document.querySelector("#btnHam-Landing");
let suitSideBar = document.querySelector(".nav-list");

if (landingMenu && suitSideBar) {
    landingMenu.addEventListener("click", () => {
    suitSideBar.classList.toggle("nav-list-sidebar");
  });
}