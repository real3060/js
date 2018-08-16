let btn = document.getElementById('open-btn'),
	leftName = document.querySelector(".name-value"),
	leftBudget = document.querySelector(".budget-value"),
	leftGoods = document.querySelector(".goods-value"),
	leftItems = document.querySelector(".items-value"),
	leftEmployers = document.querySelector(".employers-value"),
	leftDiscount = document.querySelector(".discount-value"),
	leftIsOpen = document.querySelector(".isopen-value");

	// все поля категории
let getCategory = document.querySelectorAll(".goods-item");


	// все 3 кнопки через tag
let btn1 = document.getElementsByTagName("button");

// Получить поля ввода товаров  через querySelector
let inputType1 = document.querySelector('.goods-item');
let inputType2 = document.querySelector('.goods-item');
let inputType3 = document.querySelector('.goods-item');
let inputType4 = document.querySelector('.goods-item');
// времени через querySelector
let whatsTime = document.querySelector(".time-value");
// бюджета через querySelector
let yourBudget = document.querySelector(".count-budget-value");

let employersValue = document.querySelectorAll(".hire-employers-item");


console.log(btn);
console.log(btn1[1]);
console.log(btn1[2]);
console.log(btn1[3]);
console.log(leftIsOpen);
console.log(getCategory);
console.log(inputType1);
console.log(inputType2);
console.log(inputType3);
console.log(inputType4);
console.log(whatsTime);
console.log(employersValue[0]);
console.log(employersValue[1]);
console.log(employersValue[2]);