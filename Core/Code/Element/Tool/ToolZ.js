/* Import */
import ElementController from '/Core/Code/Controller/ElementController.js';
/*  */

export default class ToolZ{

    constructor(elementController) {
        this.elementController = elementController;
        this.id = "";

        this.subscribers = [];
    }

    update(){

    }

    addSubscriber(element){
        this.subscribers.push(element);
    }

}
