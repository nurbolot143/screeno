const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const btns = document.querySelector(".header__right");
const body = document.querySelector("body");

const obj = {
  burger: [burger, "header__burger_active"],
  menu: [menu, "menu_active"],
  btns: [btns, "header__right_active"],
  body: [body, "body_lock"],
};

burger.addEventListener("click", () => {
  for (key in obj) {
    obj[key][0].classList.toggle(obj[key][1]);
  }
});
