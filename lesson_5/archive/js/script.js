let item = document.querySelectorAll('.menu-item'),
	background = document.getElementsByTagName('body'), /* чтобы обратиться используем  background[0]  */
	menu = document.querySelector('.menu'),
	// создание li
	li = document.createElement('li'),
	// ищу элемент с тегом #title 
	chH = document.getElementById('title'),
	// создаем переменную для замены этим текстом, другой текст в chH
	text = document.createTextNode('Пятый пункт'),
	// ищем элемент для того чтобы удалить дочерний элемент рекламы
	deleted = document.querySelector(".adv"),
	// поиск элемента на страницке с класом prompt
	questionSearch = document.querySelector(".prompt"),
	question = prompt(" Какое у Вас отношение к технике apple? ");
	// замена элементов li местами
menu.insertBefore(item[2], item[1]);
// добавил класс для li class="menu-item"
li.classList.add('menu-item');
// добавление в меню нашего li 
menu.appendChild(li);
// добавление текста в li 
li.appendChild(text);
// добавление картинки
document.body.style.backgroundImage = "url(img/apple_true.jpg)";
console.log('title');
// меняем текст в нужном нам месте при помощи метода .textContent
chH.textContent = "Мы продаем только подлинную технику Apple"

// проверяем что выводит deleted
console.log(deleted);
// удаляем элемент рекламы
deleted.remove();

questionSearch.textContent = (question);

