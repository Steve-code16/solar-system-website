const menuBtn = document.querySelector(".menu-btn");
const menuContainer = document.querySelector(".menu-container");
const menuWindow = document.querySelector(".menu-window");
const menuInner = document.querySelector(".menu-inner");
const menuCloseBtn = document.querySelector(".menu-close-btn");

menuBtn.addEventListener("click", () => {
  menuContainer.classList.add("active");

  setTimeout(() => {
    menuWindow.classList.add("active");
  }, 1);

  setTimeout(() => {
    menuInner.classList.add("active");
  }, 800);
});

menuCloseBtn.addEventListener("click", () => {
  setTimeout(() => {
    menuContainer.classList.remove("active");
  }, 500);
  menuWindow.classList.remove("active");
  menuInner.classList.remove("active");
});
