
let open = document.getElementById('open-btn'),
leftName = document.querySelector(".name-value"),
leftBudget = document.querySelector(".budget-value"),
leftGoods = document.querySelector(".goods-value"),
leftItems = document.querySelector(".items-value"),
leftEmployers = document.querySelector(".employers-value"),
leftDiscount = document.querySelector(".discount-value"),
leftIsOpen = document.querySelector(".isopen-value"),
yourBudget;

let mainList = {
budget: yourBudget,
name: leftName,
shopGoods: [],
employers: {},
open: true,
discount: false,
shopItems: [],
}; 
// все поля категории
let getCategory = document.querySelectorAll(".goods-item");
// кнопки выключены по умолчанию


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

// кнопки выключены по умолчанию
budgetBtn.disabled = true;
employersBtn.disabled = true;
count_budget_value.disabled = true;
goodsBtn.disabled = true;
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
	budgetBtn.disabled = false;
yourBudget = prompt("Ваш бюджет на месяц?", "18000");
while (isNaN(yourBudget) || yourBudget == '' || yourBudget == null) {
	yourBudget = prompt("Ваш бюджет на месяц?");
}
leftBudget.textContent = yourBudget;
leftName.textContent = prompt("Название вашего магазина?", "").toLocaleUpperCase();
if (yourBudget > 15000) {
	mainList.discount = true;
	let price = +(yourBudget)*0.8;
	leftDiscount.textContent = price;
	leftDiscount.style.backgroundColor = "green";	
	leftIsOpen.style.backgroundColor = "green";	
}	else {
	mainList.discount = false;
	leftDiscount.style.backgroundColor = 'red';
	leftIsOpen.style.backgroundColor = "red";
	leftDiscount.textContent = +yourBudget;
}	
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
for (let i = 0; i<employersValue; i++){
	employersValue[i].addEventListener('change', () => {
	if (employersValue[i].value != ""){
		employersBtn.disabled = false;
	} else {
		employersBtn.disabled = true;
	}
})
};
employersBtn.addEventListener('click', ()=> {
for (let i = 0; i < employersValue.length; i++) {
	let name = employersValue[i].value;
	mainList.employers[i] = name;
	leftEmployers.textContent += mainList.employers[i] + ", ";
}
});
for (let i =0; i<getCategory.length; i++){
	getCategory[i].addEventListener('change', ()=> {
		if(getCategory[i].value != "") {
			goodsBtn.disabled = false;
		} else {
			goodsBtn.disabled = true;
		}
	})
};

// прописывание только русских букв в 1 поле
let a = document.getElementById("employers_1");
let myReg = /[^а-яё]/g;
a.addEventListener("input" , () =>{
for (i = 0 ; i < a.value.length ; i++){
if(!(a.value[i].search(myReg))){
    a.value = a.value[i].slice(0,-1)}{
   }};
})