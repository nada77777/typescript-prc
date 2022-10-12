export class PopUpComponent {
    constructor(title, info) {
        this.attachTo = (parent, position = 'afterend') => {
            parent.insertAdjacentElement(position, this.element);
        };
        this.title = title;
        this.info = info;
        this.element = document.createElement('div');
        this.titleNode = document.createElement('input');
        this.infoNode = document.createElement('input');
        this.element.insertAdjacentElement('afterbegin', this.titleNode);
        this.element.insertAdjacentElement('afterbegin', this.infoNode);
        console.log(this.title, this.info);
    }
}
;
