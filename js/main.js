window.onload = function () {
  const mMenuBtn = document.querySelector(".m-menu-button");
  const mMenu = document.querySelector(".m-menu");
  const tabs = document.querySelector(".tabs");
  const tabsContent = document.querySelectorAll(".tabs-content");

  mMenuBtn.addEventListener("click", () => {
    mMenu.classList.toggle("active");
    document.querySelector("body").classList.toggle("no-scroll");
  });

  tabs.addEventListener("click", (e) => {
    if (!e.target.classList.contains("active")) {
      for (let elem of tabs.children) {
        elem.classList.toggle("active");
      }

      tabsContent.forEach((item) => {
        item.classList.toggle("visible");
      });
    }
  });

  //initialize swiper when document ready
  let mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
};
