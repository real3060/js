let num = 20;

function showFirstMessage(text) {
	alert(text);
	num = 10;
}
// function (text) { 
// 	alert(text);             TODO: анонимная функция здесь и сейчас 1 раз.
// }

showFirstMessage("hello world")
console.log(num);