export class NoteComponent {
    private noteTitle: string;
    private noteInfo: string;
    private element: Element;
    private noteNode: Element;
    constructor(noteTitle: string, noteInfo: string){
        this.noteTitle = noteTitle;
        this.noteInfo = noteInfo;
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'page__note__item');
        
        this.element.textContent = this.noteTitle;
        // this.noteNode = document.createElement('video'); 비디오로 수정
        this.noteNode = document.createElement('h3');
        // this.noteNode.setAttribute('src', this.taskInfo);
        this.noteNode.textContent = this.noteInfo;
        
        this.element.insertAdjacentElement('afterbegin',this.noteNode);
    }

    attatchTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'){
        parent.insertAdjacentElement(position, this.element);
    }
}