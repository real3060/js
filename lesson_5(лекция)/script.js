// let arr = [];
// for (var number =2; number<100; number++) {
// 	document.write("<p>"+ "<i></i>"+ number + "</i>" +" это число имеет делители: "+"</p>")
// }

// function getDevisors() {
// 	if(number % 0 && number == number) {
// 		arr.push([number]);
// 		console.log(arr([number]));
// 	}
// }



fori:
for (var i = 2; i <= 100; i++) {

for (var j = 2; j < i; j++) {
	if (i % j == 0) continue fori;
}
document.write("<p>"+ i +" - делители этого числа: " + "1" + " и "+ j +"</p>") 
}