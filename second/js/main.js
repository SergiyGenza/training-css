const openNavbtn = document.querySelector("#openMobileNav");
const closeNavbtn = document.querySelector("#closeMobileNav");
const mobileNav = document.querySelector("#mobileNav");

openNavbtn.onclick = function () {
  mobileNav.classList.remove("none");
  document.body.classList.add("no-scroll");
};

closeNavbtn.onclick = function () {
  mobileNav.classList.add("none");
  document.body.classList.remove("no-scroll");
};
