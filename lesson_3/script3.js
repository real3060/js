let yourBudget, 
	nameOfShop, 
	time,
	price

function start() {
	yourBudget = prompt("Ваш бюджет на месяц?"); 
	
	while (isNaN(yourBudget) || yourBudget =='' || yourBudget == null ){
		yourBudget = prompt("Ваш бюджет на месяц?"); 
		
	}

	nameOfShop = prompt("Название вашего магазина?").toLocaleUpperCase();

	time = 19;
	
}
// start();

var mainList = {
	budget: yourBudget,
	name: nameOfShop,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true
};
console.log(mainList.budget);
console.log(mainList.name);
function budgetDay() {
	alert("Ваш бюджет на день:" + yourBudget /30 + " Рублей");
}
budgetDay();

// alert("Ваш бюджет на день: " + yourBudget / 30 + " рублей")

console.log(mainList);


// mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
// mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
// mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
// console.log(mainList.budget);
// mainList.name = prompt("Название вашего магазина?");
// console.log(mainList.name);


function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");

		if (a != null && a != "" && a.length < 50) {
		mainList.shopGoods[i] = a;
		console.log("Все верно");
		} else {
		i--;
		console.log('что-то не так');
		}
	}
}
// chooseGoods();
function workTime(time) {
	if (time < 0) {
		console.log("Такого просто не может быть!");
	} else if(time > 8 && time < 20) {
		console.log("время работать!");
	} else if (time < 24) {
		console.log("уже слишком поздно");
	} else {
		console.log(" в сутках только 24 часа!");
}
}
workTime(18);

/* mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?")); TODO: заменили выше циклом for.
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?")); */
// можно использовать как
// mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");

// TODO: сделано по типу while 
// var e = 0;
// while (e < 3) {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if (a !==null && a !='' && a.length < 50) {
// 	mainList.shopGoods[e] = a;
// 	console.log("все верно!");
// 	e++;
// 	} else {
// 		console.log("Что-то пропустили....");
// 	}
// }
// console.log(mainList);
// TODO: сделано по типу while 


// TODO: do while

// var w = 0;
// do {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if (a !==null && a != "" && a.length < 50) {
// 		console.log("Все верно!");
// 		mainList.shopGoods[w] = a;
// 		w++
// 	}
// 	// else if( w !==0){
// 	// 	w -= 1;
// 	// }
// } while (w < 3);

// TODO: конец do while


function discountPrice() {
	if (mainList.discount == true) {
		let price = 1000;
		// price - 20%
		console.log("Цена для вас сегодня составит " + price*0.8 + " рублей!");
	} else {
		alert("Система скидок для Вас не работает!");
	}
}
// discountPrice();

function employersStaff() {
	
	for (let i = 1; i < 5; i++) {
		let a = prompt("Скажите нам Ваше имя пожалуйста :\)");
		if ( a != null && a != "" && a.length < 35) {
			console.log('все верно');
		mainList.employers[i] = a;
		} else {
			console.log('кто то врет');
			alert("Вы не хотите говорить нам Ваше имя? :\(");
			i--;
		}
	}
}
// employersStaff();

console.log(mainList);