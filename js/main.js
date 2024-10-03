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

var swiper = new Swiper(".cardSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    710: {
      slidesPerView: 2,
      slidesOffsetBefore: 30,
    },
    780: {
      slidesPerView: 2.2,
      slidesOffsetBefore: 30,
    },
    885: {
      slidesPerView: 2.5,
      slidesOffsetBefore: 30,
      slidesOffsetAfter: 100,
    },
    1070: {
      slidesPerView: 3,
      slidesOffsetBefore: 30,
      slidesOffsetAfter: 100,
    },
    1280: {
      slidesPerView: 3.7,
      slidesOffsetBefore: 30,
      slidesOffsetAfter: 100,
    },
    1560: {
      slidesPerView: 4.4,
      slidesOffsetBefore: 30,
      slidesOffsetAfter: 100,
    },
  },
});

const header = document.querySelector("header");
const sliderNav = document.querySelector(".slider-nav");
const mainMediaLinks = document.querySelector(".main-media-links");

const modalContainer = document.querySelector(".modal-container");
const modalBoxes = document.querySelectorAll(".modal-box");
const modalContents = document.querySelectorAll(".modal-content");

const readMoreBtns = document.querySelectorAll(".read-more-btn");

const modalOpen = (readMoreBtnClick) => {
  header.classList.add("hide");
  sliderNav.classList.add("hide");
  mainMediaLinks.classList.add("hide");

  modalContainer.classList.add("active");
  modalBoxes[readMoreBtnClick].classList.add("active");

  setTimeout(() => {
    modalContents[readMoreBtnClick].classList.add("active");
  }, 2000);
};

readMoreBtns.forEach((readMoreBtn, i) => {
  readMoreBtn.addEventListener("click", () => {
    modalOpen(i);
  });
});
