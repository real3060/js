class options {
    constructor(height, width, bg, fontSize, textAlign, text) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
	this.textAlign = textAlign;
	this.text = text;
    }

    newDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = `${this.text}`;
        div.style.cssText = `height: ${this.height} ; width: ${this.width}; background-color: ${this.bg}; font-Size: ${this.fontSize}; text-align: ${this.textAlign};`;
    };
};
const ras = new options('300px', '300px', '#66FF00', '30px', 'center', "hello world");
console.log(ras.newDiv());