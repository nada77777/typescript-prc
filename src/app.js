import { PageComponent } from "./components/page.js";
import { PopUpComponent } from "./components/popUp.js";
class App {
    constructor(appRoot) {
        this.click = (callBack) => {
            var _a;
            (_a = this.button) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                console.log('button click');
                console.log('callBack', typeof (callBack));
                callBack();
            });
            // console.log('cccccccccccccccccccccccccccccccccccccccccc');
        };
        this.page = new PageComponent();
        this.page.attatchTo(appRoot);
        this.popup = new PopUpComponent('ss', 'aaa');
        this.button = document.querySelector('#new-image');
        console.log(this.button);
        this.caller = this.popup.attachTo.bind(this.popup);
        console.log(this.caller);
        this.click(this.caller(appRoot));
    }
}
new App(document.querySelector('.document'));
// import { PageComponent } from './components/page.js';
// class App {
//   private readonly page: PageComponent;
//   constructor(appRoot: HTMLElement) {
//     this.page = new PageComponent();
//     this.page.attachTo(appRoot);
//   }
// }
// new App(document.querySelector('.document')! as HTMLElement);
