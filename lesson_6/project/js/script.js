
let open = document.getElementById('open-btn'),
	leftName = document.querySelector(".name-value"),
	leftBudget = document.querySelector(".budget-value"),
	leftGoods = document.querySelector(".goods-value"),
	leftItems = document.querySelector(".items-value"),
	leftEmployers = document.querySelector(".employers-value"),
	leftDiscount = document.querySelector(".discount-value"),
	leftIsOpen = document.querySelector(".isopen-value");

let mainList = {
	budget: yourBudget,
	name: leftName,
	shopGoods: [],
	employers: {},
	open: true,
	discount: tim,
	shopItems: [],
}; 
	// все поля категории
let getCategory = document.querySelectorAll(".goods-item");
var tim ;

// все 3 кнопки через tag
let	goodsBtn = document.getElementsByTagName('button')[1],
	budgetBtn = document.getElementsByTagName('button')[2],
	employersBtn = document.getElementsByTagName('button')[3];

// Получить поля ввода товаров  через querySelector
let inputType = document.querySelectorAll('.goods-item');
// времени через querySelector
let whatsTime = document.querySelector(".time-value");
// бюджета через querySelector
let count_budget_value = document.querySelector(".count-budget-value");
// получить поле ввода товаров "введите продукты через запятую"
let chooseItem = document.querySelector('.choose-item');
// кнопка нанять
let employersValue = document.querySelectorAll(".hire-employers-item"); 

goodsBtn.addEventListener('click', () => {
	for (let i = 0;  i < getCategory.length; i++) {
		let a = getCategory[i].value;
		if (a != null && a.length < 50) {
			mainList.shopGoods[i] = a;
			console.log("Все верно");
			leftGoods.textContent = mainList.shopGoods;
		} else {
			i--;
			console.log('что-то не так');
		}
	}
});
open.addEventListener('click', () => {
	var yourBudget = prompt("Ваш бюджет на месяц?", "18000");
	while (isNaN(yourBudget) || yourBudget == '' || yourBudget == null) {
		yourBudget = prompt("Ваш бюджет на месяц?");
	}
	leftBudget.textContent = yourBudget;
	leftName.textContent = prompt("Название вашего магазина?", "").toLocaleUpperCase();
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;
	if (items != '' || items == undefined) {	
	mainList.shopItems = items.split(",");
	mainList.shopItems.sort();
	leftItems.textContent = mainList.shopItems;
	}
});
whatsTime.addEventListener('change', () => {
	let time = whatsTime.value;
	if (time < 0) {
		console.log("Такого просто не может быть!");
		mainList.open = false;
	} else if (time >= 8 && time < 20) {
		console.log("время работать!");
		mainList.open = true;
	} else if (time < 24) {
		console.log("уже слишком поздно");
		mainList.open = false;
	} else {
		console.log(" в сутках только 24 часа!");
		mainList.open = false;
	}
	if(mainList.open == true) {
		leftIsOpen.style.backgroundColor = "green";
	} else {
		leftIsOpen.style.backgroundColor = "red";
	}
	});
budgetBtn.addEventListener('click', () => {
	count_budget_value.value = yourBudget	/ 30;

});
employersBtn.addEventListener('click', ()=> {
	for (let i = 0; i < employersValue.length; i++) {
		let name = employersValue[i].value;
		mainList.employers[i] = name;
		leftEmployers.textContent += mainList.employers[i] + ", ";
	}
});
var color = +leftBudget.value;
// leftBudget.addEventListener('change', () => {
// 	if (color > 15000) {
// 		mainList.discount = true;
// 		leftDiscount.textContent = mainList.budget*0.8;
// 		leftDiscount.style.backgroundColor = "green";
// 		console.log(leftDiscount);
// 		console.log(mainList.discount);
// 		console.log(leftDiscount.value);
// 		console.log("Поле работает ");
// 	}	else {
// 		mainList.discount = true;
// 		leftDiscount.style.backgroundColor = 'red';
// 		leftDiscount.textContent = +yourBudget;
// 		console.log("Поле не робит");
// 	}
// });
var tim = leftdiscont.addEventListener('click', () => {
	if (color > 15000) {
		mainList.discount = true;
		leftDiscount.textContent = mainList.budget*0.8;
		leftDiscount.style.backgroundColor = "green";
		console.log(leftDiscount);
		console.log(mainList.discount);
		console.log(leftDiscount.value);
		console.log("Поле работает ");
	}	else {
		mainList.discount = false;
		leftDiscount.style.backgroundColor = 'red';
		leftDiscount.textContent = +yourBudget;
		console.log("Поле не робит");
	}
});