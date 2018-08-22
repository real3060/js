let block = document.querySelector('.block');
block.addEventListener("mouseenter", function () {
	let lem = document.querySelector('.box');
	pos = 0;
	id = setInterval(frame, 10);
	function frame() {
		if( pos == 300) {
			clearInterval(id)
		} else {
			pos++;
			lem.style.top = pos + 'px';
			lem.style.left = pos + 'px';
		}
	}
})