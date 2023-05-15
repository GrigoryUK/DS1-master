import disableScroll from "disable-scroll";
import vars from "../../_vars";
import { isDesktop } from "../../functions/check-viewport";

function modal() {
  const disableScrollCustom = () => {
    const fixBlocks = document.querySelectorAll(".fixed-block");
    const pagePosition = window.scrollY;
    const paddingOffset = `${window.innerWidth - vars.bodyEl.offsetWidth}px`;

    vars.htmlEl.style.scrollBehavior = "none";
    fixBlocks.forEach((el) => {
      el.style.paddingRight = paddingOffset;
    });
    vars.bodyEl.style.paddingRight = paddingOffset;
    vars.bodyEl.classList.add("dis-scroll");
    vars.bodyEl.dataset.position = pagePosition;
    vars.bodyEl.style.top = `-${pagePosition}px`;
  };

  const enableScrollCustom = () => {
    const fixBlocks = document.querySelectorAll(".fixed-block");
    const body = document.body;
    const pagePosition = parseInt(vars.bodyEl.dataset.position, 10);
    fixBlocks.forEach((el) => {
      el.style.paddingRight = "0px";
    });
    vars.bodyEl.style.paddingRight = "0px";

    vars.bodyEl.style.top = "auto";
    vars.bodyEl.classList.remove("dis-scroll");
    window.scroll({
      top: pagePosition,
      left: 0,
    });
    vars.bodyEl.removeAttribute("data-position");
    vars.htmlEl.style.scrollBehavior = "smooth";
  };

  (function () {
    const buttonsBurger = document.querySelectorAll("[data-modal-btn]");
    const menu = document.querySelector("[data-modal-menu]");
    const buttonsClose = document.querySelectorAll("[data-modal-close]");

    buttonsBurger.forEach((buttonBurger) => {
      buttonBurger.addEventListener("click", (e) => {
        menu.classList.toggle("modal--active");
        if (isDesktop()) {
          disableScroll.on();
        } else {
          disableScrollCustom();
        }
      });
    });

    buttonsClose.forEach((buttonClose) => {
      buttonClose.addEventListener("click", () => {
        menu.classList.remove("modal--active");
        if (isDesktop()) {
          disableScroll.off();
        } else {
          enableScrollCustom();
        }
      });
    });
  })();
}

export { modal };
