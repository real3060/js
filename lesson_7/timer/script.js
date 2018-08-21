function start() {
	var date = new Date();
	var getHours = date.getHours();
	var	getMinutes = date.getMinutes();
	var	getSeconds = date.getSeconds();

	if(getHours < 10) {
		getHours = "0" + getHours;
	}
	if(getMinutes < 10)	{
		getMinutes = "0" + getMinutes;
	}
	if(getSeconds < 10)	{
		getSeconds = "0" + getSeconds;
}
	let global = document.getElementsByClassName("time")[0];
	global.innerHTML= getHours + ":" + getMinutes + ":" + getSeconds;
	console.log(getHours + ":" + getMinutes + ":" + getSeconds);
};
setInterval("start()", 1000);