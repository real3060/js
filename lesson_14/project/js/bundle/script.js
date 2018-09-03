"use strict"
window.addEventListener('DOMContentLoaded', () => {
	var tab = require("../parts/tab.js");
	var modal = require("../parts/modal.js");
	var ajax = require("../parts/ajax.js");
	var slider = require("../parts/slider.js");
	var calc = require("../parts/calc.js");
	var timer = require("../parts/timer.js");
	tab();
	modal();
	ajax();
	slider();
	calc();
	timer();
});

