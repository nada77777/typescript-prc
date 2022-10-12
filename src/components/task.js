export class TaskComponent {
    constructor(taskTitle, taskInfo) {
        this.taskTitle = taskTitle;
        this.taskInfo = taskInfo;
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'page__task__item');
        this.element.textContent = this.taskTitle;
        // this.taskNode = document.createElement('video'); 비디오로 수정
        this.taskNode = document.createElement('h3');
        // this.taskNode.setAttribute('src', this.taskInfo);
        this.taskNode.textContent = this.taskInfo;
        this.element.insertAdjacentElement('afterbegin', this.taskNode);
    }
    attatchTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
