//выпадающее меню в шапке

let navMenu = document.querySelector(".header__menu");
let navToggle = document.querySelector(".header__link-menu");
let navClose = document.querySelector(".header__menu-svg");
let menu =  document.querySelector(".header__link-menu");

let openMenu = function () {
    if (navMenu.classList.contains("header__menu--none")) {
        navMenu.classList.remove("header__menu--none");
        navMenu.classList.add("header__menu--block")
    }
}

let closeMenu = function () {
    if (navMenu.classList.contains("header__menu--block")) {
        navMenu.classList.remove("header__menu--block");
        navMenu.classList.add("header__menu--none")
    }
}

menu.addEventListener("click", openMenu);
navClose.addEventListener("click",closeMenu);