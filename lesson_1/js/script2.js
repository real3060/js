var mainList = {
	budget: yourBudget,
	name: nameOfShop,
	shopGoods: [],
	employers: {},
	open: true
};
 var yourBudget = prompt("Ваш бюджет на месяц?", "35000");
console.log(yourBudget);
var nameOfShop = prompt("Название вашего магазина?");
console.log(mainList.name);


mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
// можно использовать как
// mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
var budget1 = mainList.budget / 30;
console.log(budget1);
alert("Ваш бюджет на день: " + budget1 + " рублей")
console.log(mainList);
