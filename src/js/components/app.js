import clientComponent from "./clientComponent/clientComponent";
import { footerHeight } from "./footerHeight/footerHeight";
import headerSmooth from "./headerSmooth/headerSmooth";
import { example } from "./shared/import";
import smoothScroll from "./smoothScroll/smoothScroll";
import sliderApp from "./slider/slider"
import relocationLink from "./relocation/relocation";
import preloader from "./preloader/preloader";
import { form, mask } from "./validation/validation";
import { modal } from "./modal/modal";
import fileInput from "./fileInput/fileInput";

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  preloader();
  example()
  headerSmooth()
  smoothScroll()
  footerHeight()
  clientComponent()
  sliderApp()
  relocationLink()
  mask()
  form()
  modal()
  fileInput()
  // svgHomeColor()
  // textareaHeight()
});

