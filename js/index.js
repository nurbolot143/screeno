let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");
let btns = document.querySelector(".header__right");
let loginBtn = document.querySelector(".header__login-btn");
let body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger_active");
  menu.classList.toggle("menu_active");
  btns.classList.toggle("header__right_active");
  //   loginBtn.classList.toggle("login-btn");
  body.classList.toggle("body_lock");
});
