// import { PopUpComponent } from "./popUp.js";
export class Button {
    constructor() {
        this.buttonNode = () => {
            return this.element;
        };
        this.element = document.createElement('button');
        this.element.setAttribute('class', 'addBtn');
        this.element.textContent = 'ADD';
        console.log(this.element);
        // this.titleValue = titleValue;
        // this.infoValue = infoValue;
        // this.popup = new PopUpComponent();
        // this.element.addEventListener('click', () => {
        //     console.log('getValue click');
        //     // this.getValue();
        // });
    }
}
