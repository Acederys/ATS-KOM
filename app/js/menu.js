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

// форма отправки заявки

let popupBox = document.querySelector(".popup");
let popupToggle = document.querySelector(".popup--box");
let popupClose = document.querySelector(".popup__svg");
// let btnPopup =  document.querySelector(".popup__link");

let openPopup = function () {
    if (popupBox.classList.contains("popup--none")) {
        popupBox.classList.remove("popup--none");
        popupBox.classList.add("popup--block")
    }
}

let closePopup = function () {
    if (popupBox.classList.contains("popup--block")) {
        popupBox.classList.remove("popup--block");
        popupBox.classList.add("popup--none")
    }
}

popupToggle .addEventListener("click", openPopup);
popupClose.addEventListener("click",closePopup);