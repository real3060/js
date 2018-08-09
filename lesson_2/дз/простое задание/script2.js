var mainList = {
    shopGoods: [],
    employers: {},
    open: true
};
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
var budget1 = mainList.budget / 30;
console.log(budget1);
alert("Ваш бюджет на день: " + budget1 + " рублей")

console.log(mainList);
// TODO: сделано по типу while 
// var e = 0;
// while (e < 3) {
// 	mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"))
// 	e++;    
// }
// console.log(mainList);
// TODO: сделано по типу while 



// // TODO: do while

// var w = 0;
// do {
// 	mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
// 	w++;
// } while (w < 3);

// // TODO: конец do while