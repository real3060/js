function timer() {
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
}

module.exports = timer;