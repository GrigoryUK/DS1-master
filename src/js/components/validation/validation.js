import { validateForms, } from "../../functions/validate-forms";

function mask() {
	let tel = document.querySelectorAll('input[type="tel"]');
	let telMask = new Inputmask("+7 (999) 999-99-99");

	telMask.mask(tel);

	let code = document.querySelectorAll('input[type="code"]');
	let codeMask = new Inputmask("9{*}");
	codeMask.mask(code);

	let email = document.querySelectorAll('input[name="email"]');
	let emailMask = new Inputmask({
		mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
	});
	emailMask.mask(email);
}

function form() {
	const forms = document.querySelectorAll('.formComponent')

	if (forms) {
		forms.forEach(form => {

			const btnSubmit = form.querySelector('button[type="submit"]');
			const success = form.querySelector('.success'); 
			const inputs = form.querySelectorAll('.footer__input input'); 
			const textures = form.querySelectorAll('.footer__input textarea'); 
			btnSubmit.addEventListener('click', el => {
				el.preventDefault();
				const name = checkValue('input[name="name"]', form);
				const company = checkValue('input[name="company"]', form);
				const email = checkEmail('input[name="email"]', form);
				const textarea = checkValue('textarea[name="textarea"]', form);
				const final = checkFinal(name, company, email, textarea);

				if (final === true) {
					btnSubmit.setAttribute('disabled', '');
					success.classList.add('active');

					inputs.forEach(input => {
						input.setAttribute('readonly', ''); 
					})

					textures.forEach(textarea => {
						textarea.setAttribute('readonly', ''); 
					})
				  }
			})

		})


		

		function checkValue(item, form) {
			let input = form.querySelector(item);
			let cont = input.closest('.footer__input');
			let span = cont.querySelector('.warning');

			if (input.value !== "") {
				cont.classList.remove('input-warning');
				span.classList.remove('active')
				return true;
			} else {
				cont.classList.add('input-warning');
				span.classList.add('active')
			}
		}

		function checkEmail(item, form) {
			let input = form.querySelector(item);
			let cont = input.closest('.footer__input');
			let span = cont.querySelector('.warning');
			const re =
			  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (re.test(input.value)) {
		
				cont.classList.remove('input-warning');
				span.classList.remove('active')
			  return true;
			} else {
				cont.classList.add('input-warning');
				span.classList.add('active')
			}
		  }

		function checkFinal(...args) {
			function isTrue(element) {
				return element === true;
			}
			let result = args.every(isTrue);

			return result;
		}
	}

}

export {
	mask,
	form
}