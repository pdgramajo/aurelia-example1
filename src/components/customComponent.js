import {bindable} from "aurelia-framework";

export  class CustomComponent {
    @bindable data = new Object();
    constructor(){
       console.log('+++ ',this.data);
    }

}