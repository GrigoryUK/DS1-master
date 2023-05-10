

export default function clientComponent() {
	const container = document.querySelector('.sectionClient'); 

	if (container) {
		const btn = container.querySelector('.buttonComponent'); 
		const box = container.querySelector('.sectionClient__box'); 
		btn.addEventListener('click', el => {
			btn.classList.toggle('toggle');
			box.classList.toggle('short');
		})
	}

}