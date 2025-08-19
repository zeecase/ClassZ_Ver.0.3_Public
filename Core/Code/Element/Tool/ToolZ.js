/* Import */
import ElementZ from '/Core/Code/Element/ElementZ.js';
/*  */

export default class ToolZ extends ElementZ{

    constructor(id) {
        super(id);

        this.subscribers = [];
    }

    start(){

    }

    update(){

    }

    getView(){
        return null;
    }

    addSubscriber(element){
        this.subscribers.push(element);
    }

}
