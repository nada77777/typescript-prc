import { Img } from "./img.js";
import { NoteComponent } from "./note.js";
import { TaskComponent } from "./task.js";
import { VideoComponent } from "./video.js";

export class PageComponent {
  private element: HTMLUListElement;
  private readonly innerItem: Img | VideoComponent | TaskComponent| NoteComponent;

  title: string = 'not yet';
  info: string = 'not yet';
  constructor(){
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'this is pageCoponent';



    // this.innerItem = new Img('first', 'https://picsum.photos/200/300');
    // this.innerItem.attatchTo(this.element);
    // console.log(this.element);

    // this.innerItem = new Img('second', 'https://picsum.photos/200');
    // this.innerItem.attatchTo(this.element);

    // this.innerItem = new TaskComponent('task', 'takkkkkkkkkkk');
    // this.innerItem.attatchTo(this.element);

    this.innerItem = new NoteComponent(this.title, this.info);
    this.innerItem.attatchTo(this.element);
  };
  attatchTo(parent:HTMLElement, positon: InsertPosition = 'afterbegin'){
    parent.insertAdjacentElement(positon, this.element);
    console.log('page', this.element);
  };

  newItem = (a: string,b: string) =>{
    this.title = a;
    this.info = b;
    this.innerItem.attatchTo(this.element);
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
