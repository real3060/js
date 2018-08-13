// let options = {
// 	name: "test",
// 	width: 1024,
// 	height: 1024
// }

// options.bool = false;
// options.colors = {
// 	border: "black",
// 	background: 'red'
// }


// delete options.bool;

// for (let key in options) {
// 	console.log("Свойство " + key +  " имеет значение" + options[key] );
// }

// console.log(Object.keys(options).length);


// let first = [1,"second",3,4,5];

// first.pop()   /* удаление с конца последний элемент */
// console.log(first.pop());
// console.log(first.push(6));/*  внести в масссив */
// for ( let i = 0; i<first.length; i++) {
// 	// alert(first[i]);
// };
// first[99]= 99;
// first.forEach(function(item,i,arr) {
// 	console.log(i + ": " + item + "(массив: " + arr + ")" );
// })
// let first = [1, 15, 20, 3];

// function sortNumbers (a,b) {
// 	return a - b;
	
// }

// let i =first.sort(sortNumbers)
// console.log(i);


let soldeir = {
	health: 400,
	armor: 100
}
let john = {
	health: 100
}

john.__proto__ = soldeir;
console.log(john);
console.log(john.armor);
