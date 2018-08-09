let num = 50;

if (num < 49) {
	console.log("верно");
} else if(num > 100) {
	console.log("не верно");
} else {
 console.log("верно!");
}

(num == 50)? /* <<==условие */ console.log("Верно")/* <== выполнится если верно */ : console.log("Неверно!")/* <<== выполнится если не верно */;

switch (num) {
	case 49:
		console.log("Мало");
		break;
	case 100:
		console.log("Много!");
		break;
	case 80:
		console.log("Все еще много!");
		break;
	case 50:
		console.log("В точку!");
		break;
	default:
		console.log("Не в этот раз");
		break;
}

// while (num < 55) {
// 	console.log(num);  пока num < 55 выводить в консоль прибавляя по одному
// 	num++;
// }




// do {
// 	console.log(num);
// 	num++;                          аналогично действию выше, делать что-то пока не..
// }
// while (num < 55);

for (let i= 0;  i < 8; i++) {
	console.log(i);
}


