// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

// ! Вибір країни
// import 'intl-tel-input/build/css/intlTelInput.css';
// const input = document.querySelector('#phone');
// if (input) {
// 	// Перевірка чи елемент існує
// 	const iti = window.intlTelInput(input, {
// 		utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js',
// 		separateDialCode: true,
// 		preferredCountries: ['us', 'gb', 'ua'],
// 		allowDropdown: true,
// 		autoHideDialCode: false,
// 		showSelectedDialCode: true,
// 		initialCountry: 'ua',
// 		autoFormat: true, // Автоматичне форматування номера
// 		formatOnDisplay: true,
// 		autoInsertDialCode: true,
// 		nationalMode: true, // Встановіть true, якщо хочете використовувати маску тільки для внутрішніх номерів країни
// 	});

// 	const fullPhoneNumberInput = document.querySelector('#fullPhoneNumber');
// 	function submitForm() {
// 		// Отримання повного номера телефону в міжнародному форматі
// 		const fullPhoneNumber = iti.getNumber();

// 		// Запис повного номера телефону в прихований input
// 		fullPhoneNumberInput.value = fullPhoneNumber;
// 	}
// 	submitForm();
// }
// ! Додавання при натисненні на кнопку запитань в блоці FAQ
document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('.faq')) {
		const faqButton = document.querySelector('.faq__button');
		const faqItems = document.querySelectorAll('.faq-spollers__item');
		let displayedQuestions = 4; // Починаємо з чотирьох питань, які вже відображені

		// Ховаємо всі питання, що не відображені
		for (let i = displayedQuestions; i < faqItems.length; i++) {
			faqItems[i].style.display = 'none';
		}

		faqButton.addEventListener('click', function () {
			addMoreQuestions();
		});

		function addMoreQuestions() {
			const remainingQuestions = faqItems.length - displayedQuestions;
			const questionsToAdd = Math.min(4, remainingQuestions); // Додаємо максимум 4 питання або менше, якщо залишилося менше

			for (let i = displayedQuestions; i < displayedQuestions + questionsToAdd; i++) {
				faqItems[i].style.display = 'block';
			}

			displayedQuestions += questionsToAdd;

			// Приховуємо кнопку "Більше запитань", якщо не залишилося більше питань для відображення
			if (displayedQuestions >= faqItems.length) {
				faqButton.style.display = 'none';
			}
		}
	}
});

// ! Video

document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('.video')) {
		let video = document.querySelector('.video__item');
		let playButton = document.getElementById('custom-play-video-button');

		playButton.addEventListener('click', function () {
			if (video.paused) {
				video.play();
				playButton.style.display = 'none'; // ховаємо кнопку, коли відео починає відтворюватися
			} else {
				video.pause();
			}
		});

		video.addEventListener('play', function () {
			playButton.style.display = 'none'; // ховаємо кнопку, коли відео починає відтворюватися
		});

		video.addEventListener('pause', function () {
			playButton.style.display = 'block'; // показуємо кнопку, коли відео призупинено
		});
	}
});

// ! Menu button
// document.addEventListener('DOMContentLoaded', function () {
// 	var mainDiv = document.getElementById('main-button');

// 	mainDiv.addEventListener('click', function () {
// 		var icon = this.children.item(0);
// 		icon.classList.toggle('fa-times');
// 		this.classList.toggle('open');
// 	});
// });

// ? Перевірочний
// document.addEventListener('DOMContentLoaded', function () {
// 	var mainDiv = document.getElementById('main-button');

// 	mainDiv.addEventListener('click', function (event) {
// 		var icon = this.children.item(0);
// 		icon.classList.toggle('fa-times');
// 		this.classList.toggle('open');
// 		event.stopPropagation(); // Щоб подія кліку на #main-button не спричиняла виклик обробника кліків документа
// 	});

// 	document.addEventListener('click', function (event) {
// 		var mainDiv = document.getElementById('main-button');
// 		if (!mainDiv.contains(event.target)) {
// 			mainDiv.classList.remove('open');
// 		}
// 	});
// });

document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('.button-menu')) {
		var mainDiv = document.getElementById('main-button');

		mainDiv.addEventListener('click', function (event) {
			var icon = this.children.item(0);
			icon.classList.toggle('fa-times');
			this.classList.toggle('open');
			event.stopPropagation(); // Щоб подія кліку на #main-button не спричиняла виклик обробника кліків документа
		});

		document.addEventListener('click', function (event) {
			var clickedElement = event.target;
			var mainDiv = document.getElementById('main-button');

			// Перевірка чи клікнуто на посилання або елемент з класом main-button__link
			if (!mainDiv.contains(clickedElement) || clickedElement.classList.contains('main-button__link')) {
				mainDiv.classList.remove('open');
			}
		});
	}
});
if (document.querySelector('.arrow-up')) {
	window.addEventListener('scroll', function () {
		var target = document.getElementById('target');
		var arrowUp = document.querySelector('.arrow-up');

		if (window.scrollY > target.offsetTop) {
			// arrowUp.style.display = 'block';
			arrowUp.style.opacity = '1';
			arrowUp.style.pointerEvents = 'auto';
			arrowUp.style.cursor = 'pointer';
		} else {
			// arrowUp.style.display = 'none';
			arrowUp.style.pointerEvents = 'none';
			arrowUp.style.cursor = 'default';
			arrowUp.style.opacity = '0';
		}
	});
}

// Вибір цільового блоку
// var targetBlock = document.getElementById('main-div');

// // Створення нового елементу кнопки
// var newButton = document.createElement('button');
// // newButton.textContent = 'Нова кнопка';
// newButton.className = 'new-button'; // Додайте клас для стилізації за допомогою CSS

// // Додавання кнопки до DOM під цільовим блоком
// targetBlock.appendChild(newButton);

// Створіть новий екземпляр Datepicker з вказаним елементом та параметрами
// let calendar = new Datepicker('#calendar', {
// 	onSelect: function (date) {
// 		console.log(date);
// 	},
// 	onMonthChange: function (month, year) {
// 		document.getElementById('monthYear').textContent = month + ' ' + year;
// 	},
// });

// // Додайте обробник подій для кнопок навігації
// document.getElementById('prev').addEventListener('click', function () {
// 	calendar.prevMonth();
// });
// document.getElementById('next').addEventListener('click', function () {
// 	calendar.nextMonth();
// });
// Функція, яка буде викликана при зміні значення селекту

// ! Відслідковування подій вибору у селекті
// document.addEventListener('selectCallback', function (e) {
// 	const selectedValue = e.detail.select.value;
// });
// document.addEventListener('selectCallback', function (e) {
// 	const selectedValue = e.detail.select.value;
// 	const slides = document.querySelectorAll('.location__slide');

// 	slides.forEach((slide, index) => {
// 		const image1 = slide.querySelector('.location-image--1');
// 		const image2 = slide.querySelector('.location-image--2');
// 		const image3 = slide.querySelector('.location-image--3');

// 		// Спочатку приховуємо всі зображення, окрім першого
// 		image1.style.display = 'block';
// 		image2.style.display = 'none';
// 		image3.style.display = 'none';

// 		// Змінюємо стилі в залежності від вибору у селекті
// 		if (selectedValue === '1') {
// 			image1.style.display = 'block';
// 			image2.style.display = 'none';
// 			image3.style.display = 'none';
// 		} else if (selectedValue === '2') {
// 			image1.style.display = 'none';
// 			image2.style.display = 'block';
// 			image3.style.display = 'none';
// 		} else if (selectedValue === '3') {
// 			image1.style.display = 'none';
// 			image2.style.display = 'none';
// 			image3.style.display = 'block';
// 		}
// 	});
// });
document.addEventListener('selectCallback', function (e) {
	const selectedValue = e.detail.select.value;
	const slides = document.querySelectorAll('.location__slide');

	slides.forEach((slide, index) => {
		for (let i = 1; i <= 10; i++) {
			const image = slide.querySelector(`.location-image--${i}`);
			if (!image) continue; // Якщо зображення з даним класом не знайдено, переходимо до наступного
			image.style.display = i === parseInt(selectedValue) ? 'block' : 'none';
		}
	});
});
