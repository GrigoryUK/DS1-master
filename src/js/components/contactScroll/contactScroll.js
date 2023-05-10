import { gsap } from "../../vendor/gsap.min.js";
import { ScrollTrigger } from "../../vendor/ScrollTrigger.min.js";

export default function contactScroll() {
	const footer = document.querySelector('.footer');
	gsap.registerPlugin(ScrollTrigger);
	if (footer) {
		// const footerHeight = footer.offsetHeight;
		// console.log(footerHeight);

		// ScrollTrigger.defaults({
		// 	scrub: 1,
		// 	pin: true,
		// 	// markers: true,
		// });
		/**
		 * // markers: { startColor: "red", endColor: "blue", fontSize: "18px", indent: 10 }
		 */
		// const tl = gsap.timeline()
		

		// const scroll = ScrollTrigger.create({
		// 	trigger: footer,
		// 	markers: true,
		// 	start: "top top",
		// 	end: () => footerHeight * 1.2,
		// 	animation: tl,
		// });

		// const tl = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: footer,
		// 		pin: true,
		// 		start: 'top top',
		// 		end: () => footerHeight * 1.5,
		// 		scrub: 2,
		// 		ease: 'linear',
		// 		markers: true,
		// 		pinSpacing: true,
		// 	},

		// })

		// tl.fromTo('#main', 3, { y: 0 }, { y: `-${footerHeight}px` });



		// tl.fromTo(sectionOne, { y: '0%' }, { y: '-100%' })
	}
}