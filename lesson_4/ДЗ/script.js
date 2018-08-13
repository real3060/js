let yourBudget, 
	nameOfShop, 
	time,
	price

function start() {
	yourBudget = prompt("Ваш бюджет на месяц?", ""); 
	
	while (isNaN(yourBudget) || yourBudget =='' || yourBudget == null ){
		yourBudget = prompt("Ваш бюджет на месяц?"); 
		
	}

	nameOfShop = prompt("Название вашего магазина?", "").toLocaleUpperCase();

	time = 19;
	
}
// start();

var mainList = {
	budget: yourBudget,
	name: nameOfShop,
	shopGoods: [],
	employers: {},
	open: true,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?", "");
		
			if (a != null && a != "" && a.length < 50) {
				mainList.shopGoods[i] = a;
				console.log("Все верно");
			} else {
				i--;
				console.log('что-то не так');
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log("Такого просто не может быть!");
		} else if(time > 8 && time < 20) {
			console.log("время работать!");
			mainList.open = true;
		} else if (time < 24) {
			console.log("уже слишком поздно");
		} else {
			console.log(" в сутках только 24 часа!");
		}
	},
	budgetDay: function budgetDay() {
		alert("Ваш бюджет на день:" + yourBudget /30 + " Рублей");
	},
	discountPrice: function discountPrice() {
		if (mainList.discount == true) {
			let price = 1000;
			console.log("Цена для вас сегодня составит " + price*0.8 + " рублей!");
		} else {
			alert("Система скидок для Вас не работает!");
		}
	},
	employersStaff: function employersStaff() {
	
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
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую товары", "");
		if (items != '' && items != null && items != undefined) {
			mainList.shopItems = items.split(",");
			mainList.shopItems.push(prompt("Подождите, еще ", ""));
			mainList.shopItems.sort();
		} else {
			console.log("Hello world");
		}
	}

};
mainList.chooseShopItems();
let shopGoodsArr = mainList.shopItems;
shopGoodsArr.forEach(function(item, i, shopGoodsArr) {
	document.write("У нас вы можете купить: " + (i+1) + ":" + item + " </br>");

});

for (let key in mainList.shopItems) {
	console.log("Наш магазин включает в себя: " + key +  "имеет значение: " + mainList.shopItems[key]);
}
// alert("Ваш бюджет на день: " + yourBudget / 30 + " рублей")
// mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
// mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
// mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
// console.log(mainList.budget);
// mainList.name = prompt("Название вашего магазина?");
// console.log(mainList.name);
/* mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?")); TODO: заменили выше циклом for.
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?")); */
// можно использовать как
// mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
// TODO: сделано по типу while 
// var e = 0;
// while (e < 3) {
// 	let a = prompt("Какой тип товаров будем продавать?", "");
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
// 	let a = prompt("Какой тип товаров будем продавать?", "");
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
