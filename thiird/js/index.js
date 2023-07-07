const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top");

navBtn.onclick = function () {
  console.log("works");
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-mobile");
  document.body.classList.toggle("no-scroll");
};

mask("[data-tel-input]");

const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});
