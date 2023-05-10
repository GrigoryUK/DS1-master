

function svgHomeColor() {
	const container = document.querySelector('.icon-fill'); 

	if (container) {

		function onEntry(entry) {
			entry.forEach(change => {
				if (change.isIntersecting) {
					change.target.classList.add('active');
		
				}
			});
		}
		
		let options = {
			threshold: [0.5], 
			rootMargin: "-100px",
		};
		let observer = new IntersectionObserver(onEntry, options);
		let elements = document.querySelectorAll('.icon-fill');
		
		for (let elm of elements) {
			observer.observe(elm);
		}

	}

	

}

export {
	svgHomeColor
}

