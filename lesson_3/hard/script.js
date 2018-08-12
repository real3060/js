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
alert(str6);
