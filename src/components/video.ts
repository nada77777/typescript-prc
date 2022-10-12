export class VideoComponent {
    private text: string;
    private videoURL: string;
    private element: Element;
    private videoNode: Element;
    constructor(text: string, videoURL: string){
        this.text = text;
        this.videoURL = videoURL;
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'page__video__item');
        
        this.element.textContent = this.text;
        // this.videoNode = document.createElement('video'); 비디오로 수정
        this.videoNode = document.createElement('img');
        this.videoNode.setAttribute('src', this.videoURL);
        
        this.element.insertAdjacentElement('afterbegin',this.videoNode);
    }

    attatchTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'){
        parent.insertAdjacentElement(position, this.element);
    }
}