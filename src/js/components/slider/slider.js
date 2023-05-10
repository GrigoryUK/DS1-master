import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

export default function sliderApp() {
	

	const swiper = new Swiper('.swiper__one', {
		slidesPerView: 'auto',
		// spaceBetween: 110,
		loop: true,
		// allowTouchMove: false,
		autoplay: {
		  delay: 0,
	  
		  disableOnInteraction: false,
		  pauseOnMouseEnter: true,
		},
	  
		speed: 3000,
	  });
	  
	  const swiper2 = new Swiper('.swiper__two', {
		slidesPerView: 'auto',
		// spaceBetween: 110,
		loop: true,
	  
		// allowTouchMove: false,
		autoplay: {
		  delay: 0,
	  
		  disableOnInteraction: false,
		  pauseOnMouseEnter: true,
		},
	  
		speed: 2000,
	  });
}