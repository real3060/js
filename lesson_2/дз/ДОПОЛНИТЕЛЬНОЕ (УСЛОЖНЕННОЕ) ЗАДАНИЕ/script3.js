let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
for (let i=0; i< week.length; i++) {
    if(i == 5 || i == 6){
        document.write("<b>" + week[i] +"</b><br>");

    } else  if (i == 3) {
        document.write('<i>' + week[i] +"</i><br>");
    } else {
        document.write(week[i] + "</br>")
    }
};


var arr = ['14790873429579','875859803840587', '323471987491283740','4939273450927345','325723945872350','7987324590277690375','23412341234132413255'];

for (var i=0; i<arr.length; i++){
    if (arr[i][0] == "3" || arr[i][0] == "7") {
        console.log(arr[i]);
    }
    
}