import disableScroll from "disable-scroll";
import {
  isDesktop,
  isMobile,
  isTablet,
} from "../../functions/check-viewport.js";
import { Circ, gsap } from "../../vendor/gsap.min.js";

export default function preloader() {
  const container = document.querySelector(".preloaderComponent");
  if (container) {
    const videoDesk = document.getElementById("bigVideo");
    const videoMobile = document.getElementById("mobileVideo");

    function preloadEvery() {
      container.style.display = "none";

      if (isDesktop() || isTablet()) {
        preloaderSetAttr(videoDesk);

        videoDesk.onerror = function () {
          preloaderHide();
        };
      }
      if (isMobile()) {
        preloaderSetAttr(videoMobile);

        videoMobile.onerror = function () {
          preloaderHide();
        };
      }
    }

    function preloadOnly() {
      disableScroll.on();

      if (isDesktop() || isTablet()) {
        videoDesk.addEventListener("loadedmetadata", (event) => {
          const icon = container.querySelector(".icon-preloader");
          const tl = gsap.timeline({ onComplete: endPreloader });
          tl.to(icon, 0.5, { opacity: 0, y: "20%" }, 1);
          tl.fromTo(
            container,
            1,
            { y: "0%" },
            {
              y: "-100%",
              ease: Circ.easeInOut,
            },
            1.4
          );
          tl.add(videoPlay(videoDesk), 0.7);
        });

        videoDesk.onerror = function () {
          preloaderHide();
        };
      }

      if (isMobile()) {
        videoMobile.addEventListener("loadedmetadata", (event) => {
          delay(100)
            .then(() => {
              preloaderHide();
              return delay(100);
            })
            .then(() => {
              videoPlay(videoMobile);
            });
        });

        videoMobile.onerror = function () {
          preloaderHide();
        };
      }
    }

    function endPreloader() {
      disableScroll.off();
    }

    const preloaderSetAttr = (video) => {
      video.setAttribute("autoplay", "");
      video.addEventListener("loadedmetadata", (event) => {
        video.play();
      });
    };

    const preloaderHide = () => {
      const icon = container.querySelector(".icon-preloader");
      const tl = gsap.timeline({ onComplete: endPreloader });
      tl.to(icon, 0.5, { opacity: 0, y: "20%" }, 1);
      tl.fromTo(
        container,
        1,
        { y: "0%" },
        {
          y: "-100%",
          ease: Circ.easeInOut,
        },
        1.4
      );
    };

    const delay = (time) => {
      return new Promise((resolve, reject) => setTimeout(resolve, time));
    };

    function videoPlay(video) {
      setTimeout(() => {
        video.play();
        video.setAttribute("autoplay", "");
        video.click();
      }, 300);
    }

    if (!sessionStorage.getItem("doNotShowTen")) {
      sessionStorage.setItem("doNotShowTen", "true");
      preloadOnly();
    } else {
      // preloadOnly();
      preloadEvery();
    }
  }
}
