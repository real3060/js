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
let inputType = document.querySelectorAll('.goods-item');
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
console.log(inputType[1]);
console.log(inputType[2]);
console.log(inputType[3]);
console.log(inputType[4]);
console.log(whatsTime);
console.log(employersValue[0]);
console.log(employersValue[1]);
console.log(employersValue[2]);