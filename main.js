const form = document.querySelector('.form');
const email = document.querySelector('.email');
const result = document.querySelector('.result');
const cardOne = document.querySelector('.container');
const cardTwo = document.querySelector('.success');

let regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)[.]([a-z]{2,4})$/;

form?.addEventListener('submit', e => {
	e.preventDefault();

	validateEmail();

	function validateEmail() {
		if (email.value === '') {
			result.innerHTML = 'Whoops! you forgot to add your email';

			email.style.borderColor = 'crimson';

			return false;
		} else if (
			!email?.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
		) {
			const html = `
     Please provide a valid email address
    `;

			result.innerHTML = html;

			email.style.borderColor = 'crimson';
			return true;
		} else {
			result.innerHTML = '';
			cardOne.style.display = 'none';
			cardTwo.style.display = 'block';
		}
	}
});
