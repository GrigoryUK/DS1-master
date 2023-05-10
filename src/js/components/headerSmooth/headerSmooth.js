import Headroom from "headroom.js";

export default function headerSmooth() {
	const myElement = document.querySelector("header");

  if (myElement) {
    const headroom = new Headroom(myElement);
    headroom.init();
  }
}