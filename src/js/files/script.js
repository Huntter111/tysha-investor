// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

import 'intl-tel-input/build/css/intlTelInput.css';

// import intlTelInput from 'intl-tel-input/build/js/utils.js';
// import intlTelInput from 'intl-tel-input';
// import intlTelInput from 'intl-tel-input';
// const input = document.querySelector('#phone');
// intlTelInput(input, {
// 	preferredCountries: ['us', 'gb', 'ua'],
// 	utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js',
// 	// allowDropdown: true,
// 	// autoHideDialCode: false,
// 	// separateDialCode: true,
// 	initialCountry: 'ua',
// 	separateDialCode: true,

// 	showSelectedDialCode: true,
// 	autoFormat: true,
// 	formatOnDisplay: true,
// 	maxlength: 9,
// 	// useFullscreenPopup: true,
// });
// !===============
// const input = document.querySelector('#phone');
// window.intlTelInput(input, {
// 	utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js',
// 	separateDialCode: true,
// 	preferredCountries: ['us', 'gb', 'ua'],
// 	allowDropdown: true,
// 	autoHideDialCode: false,
// 	separateDialCode: true,
// 	showSelectedDialCode: true,
// 	initialCountry: 'ua',
// 	autoFormat: true,
// 	formatOnDisplay: true,
// 	autoInsertDialCode: true,
// 	nationalMode: true,
// });
// ! ++++++++++++++++++++++
const input = document.querySelector('#phone');

if (input) {
	// Перевірка чи елемент існує
	const iti = window.intlTelInput(input, {
		utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js',
		separateDialCode: true,
		preferredCountries: ['us', 'gb', 'ua'],
		allowDropdown: true,
		autoHideDialCode: false,
		showSelectedDialCode: true,
		initialCountry: 'ua',
		autoFormat: true, // Автоматичне форматування номера
		formatOnDisplay: true,
		autoInsertDialCode: true,
		nationalMode: true, // Встановіть true, якщо хочете використовувати маску тільки для внутрішніх номерів країни
	});

	const fullPhoneNumberInput = document.querySelector('#fullPhoneNumber');
	function submitForm() {
		// Отримання повного номера телефону в міжнародному форматі
		const fullPhoneNumber = iti.getNumber();

		// Запис повного номера телефону в прихований input
		fullPhoneNumberInput.value = fullPhoneNumber;
	}
	submitForm();
}
