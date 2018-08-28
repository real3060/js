window.addEventListener('DOMContentLoaded', () => {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');

		}
	}
	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
	//  timer
	let deadLine = '2018-09-17';
	// расчет времени в милисекундах от того времени которое задано


	// расчет времени в милисекундах от того времени которое задано
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds,
		};
	};
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);

			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if (t.total == 0) {
				clearInterval(timeInterval);
			}
			if (t.total < 0) {
				hours.innerHTML = "00";
				minutes.innerHTML = "00";
				seconds.innerHTML = "00";
			}
			if (t.hours < 10) { hours.innerHTML = `0${t.hours}`; };
			if (t.minutes < 10) { minutes.innerHTML = `0${t.minutes}`; };
			if (t.seconds < 10) { seconds.innerHTML = `0${t.seconds}`; };
		}

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);

	}

	setClock('timer', deadLine);
	// модалка 
	let more = document.querySelector('.more');
	let overlay = document.querySelector('.overlay');
	let close = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	});


	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = "";
	});

	// модалка на кнопку узнать подробнее
	var knowMore = document.querySelectorAll('.description-btn');
	// получение версии браузера
	function get_name_browser() {
		// получаем данные userAgent
		var ua = navigator.userAgent;
		if (ua.search(/Chrome/) > 0) return 'Google Chrome';
		if (ua.search(/Firefox/) > 0) return 'Firefox';
		if (ua.search(/Opera/) > 0) return 'Opera';
		if (ua.search(/Safari/) > 0) return 'Safari';
		if (ua.search(/MSIE/) > 0) return 'IE';

		return 'Не определен';
	}
	var browser = get_name_browser();
	//  цикл
	if (window.screen.width > 600) {

		for (let i = 0; i < knowMore.length; i++)
			knowMore[i].addEventListener('click', function () {
				if (i === 2 && window.screen.width > 600 && browser != "IE") {
					knowMore[i].classList.remove('more-splash'); //удалил огненную кнопку
					knowMore[i].classList.add('animation-open'); //добавил свой класс анимации
					overlay.classList.remove('fade'); //удалил у оверлея эффект выпадания
					overlay.classList.add('animation-open'); //добавил свой эффект выпадания
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden'; //удалил прокрутку на фоне
				} if (i === 3) {
					knowMore[i].classList.remove('more-splash');
					document.body.style.overflow = 'hidden';
					overlay.classList.remove('fade');
					overlay.classList.add('active');
					var opacit = 0.1;
					overlay.style.display = 'block';
					var timer = setInterval(function () {
						if (opacit >= 1) {
							clearInterval(timer);
						}
						overlay.style.opacity = opacit;
						overlay.style.filter = 'alpha(opacity=' + opacit * 100 + ")";
						opacit += opacit + 0.1;
					}, 10);
				} else {
					knowMore[i].classList.add('more-splash');
					overlay.classList.add('fade');
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
				}

			});
	} else {
		for (let i = 0; i < 4; i++)
			knowMore[i].addEventListener('click', function () {
				knowMore[i].classList.remove('more-splash');
				overlay.classList.remove('fade');
				overlay.style.display = "block";
				document.body.style.overflow = "hidden";

			});
	};



	// form


	let message = new Object();
	message.loading = "Загрузка.....";
	message.success = "Спасибо, скоро мы с Вами свяжемся... ";
	message.failure = "Чтото пошло не так...";

	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		form.appendChild(statusMessage);


		//AJAX

		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');


		request.setRequestHeader("Content-type", "Application/x-www-form-urlencoded");
		let formData = new FormData(form);
		request.send(form);


		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					//Добавление анимации или контента на страницу
				}
				else {
					statusMessage.contentText = message.failure;
				}
			}
		}
		for (let i = 0; i < input.length; i++) {
			input[i].value = "";
			// очищаем инпут
		}
	});

	// form contacts

	let contactForm = document.getElementsByClassName('contact-form')[0],
		inputContacts = contactForm.getElementsByTagName('input');
	statusMessage.classList.add('status')

	contactForm.addEventListener('submit', function (event) {
		event.preventDefault();
		contactForm.appendChild(statusMessage);


		// AJAX

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');

		request.setRequestHeader("Content-type", "Application/x-www-form-urlencoded");
		let FormContacts = new FormData(contactForm);
		request.send(contactForm);


		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					//Добавление анимации или контента на страницу
				}
				else {
					statusMessage.contentText = message.failure;
				}
			}
		}
		for (let i = 0; i < inputContacts.length; i++) {
			inputContacts[i].value = "";
			// очищаем инпут
		}
	})
});