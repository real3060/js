var first = 1;
let second = 2;
const pi = 3.14;
// TODO: константа, которую уже изменить будет нельзя


{
	let second = 2;
	//TODO: не видна за пределами объекта
}

var number = 6;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null; /* TODO: просто чего то не существует*/
undefined; /* TODO:выводится если есть переменная, но никакого значения она не имеет */
var obj = {};


console.log(4 / 0);
console.log('string' * 9);

var und;
console.log(und);
/* выведет undefined */

obj = {
	name: "John",
	age: 25,
	isMarried: false
}
console.log(obj.name); /* точечная нотация */
console.log(obj["name"]); /* получение через скобки */
// работа с массивом
var arr = ['plum', 'orange', 'apple'];
console.log(arr[2]);
// конец работы с массивом

/* alert("hello");
confirm("Are you here?"); 
TODO: получение модального окна с подтверждением да или нет, и получение ответа в виде boolean: true или false*/

// prompt("Вам есть 18?", "18"); /* TODO:тип полученных данных будет всегда 'string' */

/* var answer = prompt("Вам есть 18?", "18"); 
console.log(typeof(answer)); TODO: проверка на тип данных */
console.log(typeof (arr)); /* проверка на тип данных  */

/* var answer = +prompt("Вам есть 18?", "18"); изменил тип полученных данных с строки в число при помощи знака плюс перед промпт
console.log(typeof(answer)); */

console.log('arr' + " - object"); /* соединение (concat) объекта и строки */
console.log(4 + " - object"); /* соединение (concat) числа и строки */

var incr = 10;
decr = 10;
// incr++;
// decr--;
// console.log(incr++);
// console.log(decr--);

console.log(5 % 2);
console.log(incr == 10);/*  сравнивание == */
console.log('10' === 10);/*  сравнивание === делается по типам данным */
var isChecked = true;
var isClosed = true;
console.log(isChecked || !isClosed);
// TODO: || (или) если одно из значений равно true	то он выдаст true 
// TODO: && (и) если одно из значений равно false то он выдаст false


