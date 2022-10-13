import { NoteComponent } from './note';
import { Button } from './button.js';
import { PageComponent } from './page.js';



export class PopUpComponent {
    // private title: string;
    // private info: string;
    private element: Element;
    private titleNode: HTMLInputElement;
    private infoNode: HTMLInputElement;
    private titleText: Element;
    private infoTEXT: Element;

    private button: Button;
    private page: PageComponent;
    private note: NoteComponent;
    constructor(){
        // this.title = title;
        // this.info = info;
        this.titleText = document.createElement('p');
        this.infoTEXT = document.createElement('p');
        this.titleText.textContent = 'title';
        this.infoTEXT.textContent = 'URL';

        


        this.element = document.createElement('div');
        this.element.setAttribute('class', 'popup');
        this.titleNode = document.createElement('input');
        this.titleNode.setAttribute('class', 'titleNode');
        this.infoNode = document.createElement('input');
        this.infoNode.setAttribute('class', 'infoNode');

        this.element.appendChild(this.titleText);
        // this.element.insertAdjacentElement('afterbegin', this.titleText);
        this.element.insertAdjacentElement('afterbegin', this.infoNode);
        this.element.insertAdjacentElement('afterbegin', this.titleNode);
        
        this.element.appendChild(this.infoTEXT);
        // this.element.insertBefore(this.infoTEXT, this.infoNode);

        this.titleNode.value;
        this.titleNode.value;

        this.button = new Button();
        this.element.insertAdjacentElement('beforeend', this.button.buttonNode());
        console.log(this.button.buttonNode());

        console.log(this.titleNode, this.infoNode);
    
        // console.log(this.title, this.info);


        // this.titleText.addEventListener('click', () => {
        //     console.log(this.titleNode.value, this.infoNode.value);
        // });

        this.page = new PageComponent();
        
        this.note = new NoteComponent(this.titleNode.value, this.infoNode.value);
        this.button.buttonNode().addEventListener('click', () => {
            // this.insertValue();
            // this.note = new NoteComponent(this.titleNode.value, this.infoNode.value);
            this.page.newItem(this.titleNode.value, this.infoNode.value);
            console.log('ckckckcckckckk');
        });

    }

    attachTo = (parent: HTMLElement, position: InsertPosition='afterend') => {
        parent.insertAdjacentElement(position, this.element);
    };

    insertValue(){
        console.log(this.titleNode.value, this.infoNode.value);
    };
    



};