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
        div.innerHTML = '<h4><b><i>я новый блок</i></b></h4>';
        div.style.cssText = `height: ${this.height}px;
                            width: ${this.width}px;
                            background-color: ${this.bg};
                            font-size: ${this.fontSize}px;
                            text-align: ${this.textAlign};`;
        document.body.appendChild(div);
    }
    
}
const page = new Options(25,1024,'blue',16,'left');
page.createDiv();
