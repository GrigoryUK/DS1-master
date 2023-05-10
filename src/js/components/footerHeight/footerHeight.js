import { isDesktop } from '../../functions/check-viewport';

export function footerHeight() {

	if (isDesktop()) {
		const container = document.querySelector('.footer'); 

		if (container) {
			const appHeight = () => {
				const doc = document.documentElement;
				const footerHeight = document.querySelector('.footer').offsetHeight;
				const height = doc.style.setProperty('--vh-100', `calc(${footerHeight}px)`)
	
	
			}
			window.addEventListener('resize', appHeight)
			appHeight()
		}
		
	}


}
