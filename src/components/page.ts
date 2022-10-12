import { Img } from "./img.js";
import { NoteComponent } from "./note.js";
import { TaskComponent } from "./task.js";
import { VideoComponent } from "./video.js";

export class PageComponent {
  private element: HTMLUListElement;
  private readonly innerItem: Img | VideoComponent | TaskComponent| NoteComponent;
  constructor(){
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'this is pageCoponent';
    this.innerItem = new Img('first', 'https://picsum.photos/200/300');
    this.innerItem.attatchTo(this.element);
    console.log(this.element);

    this.innerItem = new Img('second', 'https://picsum.photos/200');
    this.innerItem.attatchTo(this.element);

    this.innerItem = new TaskComponent('task', 'takkkkkkkkkkk');
    this.innerItem.attatchTo(this.element);

    this.innerItem = new NoteComponent('note', 'noteeeeeee');
    this.innerItem.attatchTo(this.element);
  };
  attatchTo(parent:HTMLElement, positon: InsertPosition = 'afterbegin'){
    parent.insertAdjacentElement(positon, this.element);
    console.log('page', this.element);
  };
};


























// export class PageComponent {
//   private element: HTMLUListElement;
//   constructor() {
//     this.element = document.createElement('ul');
//     this.element.setAttribute('class', 'page');
//     this.element.textContent = 'This is PageComponent';
//   }

//   attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
//     parent.insertAdjacentElement(position, this.element);
//   }
// }
