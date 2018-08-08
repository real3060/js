var mainList = {
	shopGoods: [],
	employers: {},
	open: true
};
mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
mainList.budget = prompt("Ваш бюджет на месяц?", "35000");
console.log(mainList.budget);
mainList.name = prompt("Название вашего магазина?");
console.log(mainList.name);
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
var budget1 = mainList.budget / 30;
console.log(budget1);
alert("Ваш бюджет на день: " + budget1 + " рублей")
