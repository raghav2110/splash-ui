//Landing Menu Sidebar
let landingMenu = document.querySelector("#btnHam-Landing");
let landingSideBar = document.querySelector(".nav-list");

if (landingMenu && landingSideBar) {
    landingMenu.addEventListener("click", () => {
      landingSideBar.classList.toggle("nav-list-sidebar");
  });
}

//Document Site Hamburger
let docHamButton = document.querySelector("#btnHam-document");
let docSideBar = document.querySelector(".components-nav")
let openMenu = document.querySelector(".components-nav-hamburger")

if (docHamButton && docSideBar){
  docHamButton.addEventListener("click",()=>{
    docSideBar.classList.toggle("components-nav-hamburger")
  });
}

//Hide SideNav Bar On Click
function hideSideNavBar(){
  docSideBar.classList.toggle("components-nav-hamburger");
}