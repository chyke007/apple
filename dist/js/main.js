// select Dom Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navitems = document.querySelectorAll(".nav-item");
const cross = document.querySelectorAll(".cross")[0];

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);



function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navitems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
   navitems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
