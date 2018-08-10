

// let calc = function (a, b) {
// 	return a + b   /* выполняется только тогда, когда код до нее доходит, мы не можем выполнить ее заранее. и не может взять данные до того как ее объявили, то есть сверху даные не возьмет, только снизу */
// }

// let  calc = (a,b) => a+b

// console.log(calc(4,15));  
// console.log(calc(4,5));

// let str = "test";
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());


// let str = "12.2px";
// console.log(Math.round(str));

let str = "12.2";
console.log(parseFloat(str)); /* может взять одну точкую */
console.log(parseInt(str)); /* берет строку и превращает в число */
