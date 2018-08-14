var str = "урок-3-был слишком легким";
let str1 = str.replace(/-/g, " ");
console.log(str1 + " hello");
console.log(typeof (str1));
let str2 = str1.slice(19, 25);
console.log(str2);
let str3 = str2.split("")
console.log(str3);
let str4 = str3[4] = "о";
let str5 = str3[5] = "о";
console.log(str4);
console.log(str5);
let str6 = str1.slice(19, 23) + str4 + str5;
// alert(str6);
arr = [20, 33, 1, 'Человек', 2, 3];
arr.splice(3, 1);
console.log(arr);
var arrNew = [];
for (i = 0; i < arr.length; i++) {
	arrNew.push(arr[i]**3);
	console.log(arrNew);
}
let arrReduce = arrNew.reduce(function(sum, current) {
	return sum + current;
});
console.log((Math.sqrt(arrReduce)));
function real (a) {
	if ((typeof(a) == "string") && a.length<50) {
		console.log("Все верно!");
		console.log(a.trim());
	} else if (a.length>50) {
		console.log( (a.trim()).slice(0,50) + "...");
		console.log(((a.trim()).slice(0,50) + "...").length);
		console.log("Все верно!");
	} else {
		console.log("Ввели неверное значение!");

	}
}
real("ffffffffffffasdfasdfasdfasdhfkjahfhfkjheuyfkakjsdfhkashdkjh4q35kj1h345k143hk5jh34lk5jhasd981y32948y132894y132y9yskadhjfk    ");
