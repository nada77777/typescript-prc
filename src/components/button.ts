// import { PopUpComponent } from "./popUp.js";

export class Button {

    // titleValue: string | null;
    // infoValue: string | null;

    private element: Element;
    constructor(){


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


    buttonNode = (): Element => {
        return this.element;
    }

    // getValue(titleNodeValue: string, infoNodeValue: string){
    //     // this.element.addEventListener('click', () => {
    //         console.log(titleNodeValue, infoNodeValue);
    //     //     // this.popup.insertValue();
    //     // });
        
    // }

}