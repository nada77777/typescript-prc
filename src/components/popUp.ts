export class PopUpComponent {
    private title: string;
    private info: string;
    private element: Element;
    private titleNode: Element;
    private infoNode: Element;
    constructor(title: string, info: string){
        this.title = title;
        this.info = info;
        this.element = document.createElement('div');
        this.titleNode = document.createElement('input');
        this.infoNode = document.createElement('input');

        this.element.insertAdjacentElement('afterbegin', this.titleNode);
        this.element.insertAdjacentElement('afterbegin', this.infoNode);
        console.log(this.title, this.info);
    }

    attachTo = (parent: HTMLElement, position: InsertPosition='afterend') =>{
        parent.insertAdjacentElement(position, this.element);
    };
    


};