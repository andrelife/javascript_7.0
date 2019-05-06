class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
        div.style.cssText = 'color: red; font-size: 20px;';
        return div;
    }
    
}
const page = new Options(25,25,'red',16,'left');
console.log(page.createDiv());