/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay, Thumbs, Controller, EffectCoverflow } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import '../../scss/base/swiper.scss';
// Повний набір стилів з scss/libs/swiper.scss
import '../../scss/libs/swiper.scss';
// Повний набір стилів з node_modules
// import 'swiper/css';

// !Ініціалізація слайдерів | Робочий
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	// ! Infrastructure
	if (document.querySelector('.infrastructure__slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.infrastructure__slider', {
			modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
			observer: true,
			observeParents: true,
			loop: true,
			speed: 800,
			// spaceBetween: 0,
			// slidesPerView: 2,
			initialSlide: 2,
			centeredSlides: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			effect: 'coverflow',
			coverflowEffect: {
				depth: 60,
				modifier: 3,
				rotate: 0,
				stretch: 0,
				slideShadows: false,
			},
			pagination: {
				el: '.infrastructure-swiper-pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '.infrastructure-swiper-button-prev',
				nextEl: '.infrastructure-swiper-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 1.334,
					spaceBetween: 100,
				},
				1240: {
					slidesPerView: 1.334,
					spaceBetween: 180,
				},
			},
			on: {},
		});
	}
	// ! Location
	if (document.querySelector('.location__slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.location__slider', {
			modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
			observer: true,
			observeParents: true,
			loop: true,
			speed: 800,
			// spaceBetween: 0,
			// slidesPerView: 2,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			initialSlide: 2,
			centeredSlides: true,
			effect: 'coverflow',
			coverflowEffect: {
				depth: 50,
				modifier: 3,
				rotate: 0,
				stretch: 0,
				slideShadows: false,
			},
			pagination: {
				el: '.location-swiper-pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '.location-swiper-button-prev',
				nextEl: '.location-swiper-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 1.34,
					spaceBetween: 100,
				},
				1240: {
					slidesPerView: 1.34,
					spaceBetween: 180,
				},
			},
			on: {},
		});
	}
	// ! Building
	if (document.querySelector('.slider-building__slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-building__slider', {
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			speed: 800,
			// loop: true,
			spaceBetween: 30,
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			initialSlide: 2,
			centeredSlides: true,
			// effect: 'fade',
			// coverflowEffect: {
			// 	depth: 60,
			// 	modifier: 3,
			// 	rotate: 0,
			// 	stretch: 0,
			// 	slideShadows: false,
			// },
			pagination: {
				el: '.slider-building-pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '.slider-building-button-prev',
				nextEl: '.slider-building-button-next',
			},
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 		spaceBetween: 30,
			// 	},
			// 	768: {
			// 		slidesPerView: 1.334,
			// 		spaceBetween: 100,
			// 	},
			// 	1240: {
			// 		slidesPerView: 1.334,
			// 		spaceBetween: 180,
			// 	},
			// },
			on: {},
		});
	}
	// ! THUMB SLIDER
	let mySwiper;
	if (document.querySelector('.main-page__slider')) {
		let thumbsSwiper;

		thumbsSwiper = new Swiper('.main-page-thumb__slider', {
			modules: [Thumbs, Controller, EffectFade],
			observer: true,
			observeParents: true,
			speed: 300,
			slideToClickedSlide: true,
			freeMode: true,
			watchSlidesProgress: true,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
					effect: 'fade',
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
					effect: 'slide',
				},
			},
		});

		mySwiper = new Swiper('.main-page__slider', {
			modules: [Navigation, Pagination, EffectFade, Thumbs, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			pagination: {
				el: '.main-page-pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '.main-page__button-prev',
				nextEl: '.main-page__button-next',
			},
			effect: 'fade',
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			thumbs: {
				thumbsSwiper: thumbsSwiper,
			},
			on: {
				slideChange: function () {
					updateFraction();
					thumbsSwiper.slideTo(mySwiper.activeIndex);
				},
			},
		});

		thumbsSwiper.on('click', function () {
			mySwiper.slideTo(thumbsSwiper.clickedIndex);
		});
		function updateFraction() {
			let currentSlide = mySwiper.activeIndex + 1;
			let totalSlides = mySwiper.slides.length;

			let fractionElement = document.querySelector('.swiper-fraction-pagination');
			if (fractionElement) {
				fractionElement.innerHTML = `<span class='swiper-fraction-pagination__first'>${currentSlide}/</span><span class='swiper-fraction-pagination__second'>${totalSlides} </span>`;
			}
		}

		updateFraction();
	}
}

// ?
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener('load', function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});
