import $ from "jquery";
import "swiped-events";
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
import { isDesktop, isMobile, isTablet } from "../../functions/check-viewport";
Swiper.use([Navigation, Pagination, Autoplay]);

export default function sliderApp() {
  const swiperOne = document.querySelector(".swiper__one");
  const swiperTwo = document.querySelector(".swiper__two");
  const container = document.querySelector(".clients__container-fluid");

  if (container) {
    if (isDesktop() || isTablet()) {
      container.addEventListener("mouseenter", (el) => {
        // console.log(swiper.activeIndex);
        // let num = swiper.activeIndex;
        // swiper.slideToLoop(num, 10);
        swiper.autoplay.stop();
      });

      container.addEventListener("mouseleave", (el) => {
        swiper.autoplay.start();
      });
    }

    if (isMobile()) {
      document.addEventListener("swiped", function (e) {
        const click = e.composedPath().includes(container);

        if (click) {
          swiper.autoplay.stop();
          swiper2.autoplay.stop();
        } else {
          swiper.autoplay.start();
          swiper2.autoplay.start();
        }
      });
    }
  }

  const swiper = new Swiper(swiperOne, {
    slidesPerView: "auto",
    loop: true,

    autoplay: {
      delay: 0,

      disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        speed: 4000,
      },

      576: {
        speed: 2000,
      },
    },
  });

  const swiper2 = new Swiper(swiperTwo, {
    slidesPerView: "auto",
    loop: true,

    breakpoints: {
      0: {
        speed: 4000,
      },

      576: {
        speed: 2000,
      },
    },

    autoplay: {
      delay: 0,

      disableOnInteraction: false,
    },
  });
}

function JqSlider() {
  let setElm = $(".slide-area"),
    slideSpeed = 2000;

  setElm.each(function () {
    const self = $(this),
      selfWidth = self.innerWidth(),
      findUl = self.find("ul"),
      findLi = self.find("li"),
      listWidth = findLi.outerWidth(),
      listCount = findLi.length,
      loopWidth = listWidth * listCount;

    findUl.wrapAll('<div class="loop-slider-wrap"/>');
    const selfWrap = self.find(".loop-slider-wrap");

    if (loopWidth > selfWidth) {
      findUl.css({ width: loopWidth }).clone().appendTo(selfWrap);

      selfWrap.css({ width: loopWidth * 2 });

      function loopMove() {
        selfWrap.animate(
          { left: "-" + loopWidth + "px" },
          slideSpeed * listCount,
          "linear",
          function () {
            selfWrap.css({ left: "0" });
            loopMove();
          }
        );
      }
      loopMove();
    }
  });
}
