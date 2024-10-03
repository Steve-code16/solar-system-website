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

const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    header.classList.remove("hide");
    sliderNav.classList.remove("hide");
    mainMediaLinks.classList.remove("hide");

    modalContainer.classList.remove("active");

    modalBoxes.forEach((modalBox) => {
      modalBox.classList.remove("active");
    });

    modalContents.forEach((modalContent) => {
      modalContent.classList.remove("active");
    });
  });
});

const swiperSlides = document.querySelectorAll(".swiper-slide");

swiperSlides.forEach((swiperSlide) => {
  const readMoreBtn = swiperSlide.querySelector(".read-more-btn");

  readMoreBtn.addEventListener("click", () => {
    const startingElement = document.querySelector(
      ".swiper-slide.swiper-slide-active"
    );

    if (startingElement) {
      const elements = Array.from(document.querySelectorAll(".swiper-slide"));
      const startingIndex = elements.indexOf(startingElement);
      const elementToHide = elements.slice(startingIndex);

      elementToHide.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("hide");
        }, index * 150);
      });
    }
  });
});

modalBoxes.forEach((modalBox) => {
  const modalCloseBtn = modalBox.querySelector(".modal-close-btn");

  modalCloseBtn.addEventListener("click", () => {
    const startingElement = document.querySelector(
      ".swiper-slide.swiper-slide-active"
    );

    if (startingElement) {
      const elements = Array.from(document.querySelectorAll(".swiper-slide"));
      const startingIndex = elements.indexOf(startingElement);
      const elementsToShow = elements.slice(startingIndex);

      elementsToShow.forEach((element, index) => {
        setTimeout(() => {
          element.classList.remove("hide");
        }, index * 150);
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const searchResults = document.querySelector(".search-results");
  const cardContainer = document.getElementById("cardContainer");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const matchingCards = Array.from(
      cardContainer.getElementsByClassName("card")
    ).filter((card) => card.dataset.title.toLowerCase().includes(searchTerm));

    searchResults.innerHTML = "";

    matchingCards.forEach((card) => {
      const link = document.createElement("a");

      link.classList.add("search-result-link");
      link.href = "#";
      link.textContent = card.dataset.title;

      link.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(card.dataset.title);
      });

      searchResults.appendChild(link);
    });
  });
});
