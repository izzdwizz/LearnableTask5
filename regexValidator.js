const form = document.getElementById('card-form');
const ErrorMessageOrSuccess = document.getElementById('result');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const cardNumber = document.getElementById('card-number').value;
	const cvvNumber = document.getElementById('cvv-number').value;
	const cvvRegex = /^\d{3}$/;
	const visaRegex = /^4[0-9]{12,15}$/;
	const verveRegex = /^(506[0-1]{1}[0-9]{11,13}|650[0-9]{12,14})$/;
	const expressAmericaRegex = /^3[47][0-9]{13}$/;
	const mastercardRegex = /^5[1-5][0-9]{14}$/;

	let message = '';

	if (visaRegex.test(cardNumber)) {
		message = 'Credit Card Type: Visa.';
		alert(message);
	} else if (expressAmericaRegex.test(cardNumber)) {
		message = 'Credit Card Type: American Express.';
		alert(message);
	} else if (mastercardRegex.test(cardNumber)) {
		message = 'Credit Card Type: Mastercard.';
		alert(message);
	} else if (verveRegex.test(cardNumber)) {
		message = 'Credit Card Type: Verve.';
		alert(message);
	} else {
		message = 'Invalid Card';
		console.log(message);
	}

	if (cvvRegex.test(cvvNumber)) {
		message += ' CVV received';
	} else {
		message += '<br> <br> Invalid cvv number. Please try again in 30 seconds';
		console.log(message);
	}

	ErrorMessageOrSuccess.innerHTML = message;
});
