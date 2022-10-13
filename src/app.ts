import { PageComponent } from "./components/page.js";
import { PopUpComponent } from "./components/popUp.js";



class App {
  private readonly page: PageComponent;
  private button: HTMLElement;
  private popup: PopUpComponent;
  app:HTMLElement;
  caller: any;
  constructor(appRoot:HTMLElement) {
    this.page = new PageComponent();
    this.page.attatchTo(appRoot);
    

    this.app = appRoot



    // this.popup = new PopUpComponent('ss','aaa');

    this.popup = new PopUpComponent();


    this.button = document.querySelector('#new-image')! as HTMLElement;
    console.log(this.popup);
    this.caller = this.popup.attachTo.bind(this.popup);
    // console.log(this.caller);
    // this.click(this.caller(appRoot));
    // console.log('attatchTo',this.popup.attachTo.bind(this.popup));
    this.click(this.caller);
  }




  
  click = (callBack: any) => {
    this.button?.addEventListener('click', () => {
      console.log('button click');
      console.log(callBack);
      callBack(this.app);
      // console.log(this.app);
    });
    // console.log('cccccccccccccccccccccccccccccccccccccccccc');
  }


}

new App(document.querySelector('.document')! as HTMLElement);



































// import { PageComponent } from './components/page.js';

// class App {
//   private readonly page: PageComponent;
//   constructor(appRoot: HTMLElement) {
//     this.page = new PageComponent();
//     this.page.attachTo(appRoot);
//   }
// }

// new App(document.querySelector('.document')! as HTMLElement);
