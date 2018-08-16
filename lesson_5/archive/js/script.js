let item = document.querySelectorAll('.menu-item'),
	background = document.getElementsByTagName('body'),
	menu = document.querySelector('.menu'),
	li = document.createElement('li'),
	text = document.createTextNode('Пятый пункт');
menu.insertBefore(item[2], item[1]);
li.classList.add('menu-item');
menu.appendChild(li);
li.appendChild(text);
// bg.style.backgroundColor = "black";
document.body.style.backgroundImage = "url(/img/apple_true.jpg)";
	// document.body.style.backgroundColor = "black";