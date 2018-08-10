var yourBudget = prompt("Ваш бюджет на месяц?", "35000");
var nameOfShop = prompt("Название вашего магазина?");

var mainList = {
	budget: yourBudget,
	name: nameOfShop,
	shopGoods: [],
	employers: {},
	open: true
};
console.log(mainList.budget);
console.log(mainList.name);

alert("Ваш бюджет на день: " + yourBudget / 30 + " рублей")

console.log(mainList);


// let time = 19;
// mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
// mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
// mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
// console.log(mainList.budget);
// mainList.name = prompt("Название вашего магазина?");
// console.log(mainList.name);

// for (let i = 0; i < 5; i++) {
//     let a = prompt("Какой тип товаров будем продавать?");

// 				console.log('Все верно');
// 					if ((typeof (a)) === 'string' && (typeof (a)) === null && a != "" && a.length < 50) {
//         mainList.shopGoods[i] = a;
//     } else {
//     }
// }

// if (time < 0) {
//     console.log("Такого просто не может быть!");
// } else if(time > 8 && time < 20) {
//     console.log("время работать!");
// } else if (time < 24) {
//     console.log("уже слишком поздно");
// } else {
//     console.log(" в сутках только 24 часа!");
// }

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

console.log(mainList);