export class Img {
    constructor(text, imgURL) {
        this.text = text;
        this.imgURL = imgURL;
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'page__img__item');
        this.imgNode = document.createElement('img');
        this.imgNode.setAttribute('src', this.imgURL);
        this.imgNode.setAttribute("width", "304");
        this.imgNode.setAttribute("height", "228");
        this.element.textContent = this.text;
        this.element.insertAdjacentElement('afterbegin', this.imgNode);
        // this.element.append(this.imgNode);
        console.log('this.imgNode', typeof (this.imgNode));
        console.log('this.element', this.element);
    }
    ;
    attatchTo(parent, positon = 'afterbegin') {
        parent.insertAdjacentElement(positon, this.element);
        console.log(parent);
        console.log('ssssssssssssss', this.element);
    }
}
;
