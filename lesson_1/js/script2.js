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

mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
// можно использовать как
// mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");

alert("Ваш бюджет на день: " + yourBudget / 30 + " рублей")
console.log(mainList);
