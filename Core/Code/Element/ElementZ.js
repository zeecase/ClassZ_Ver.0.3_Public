/* Import */
import ElementController from '/Core/Code/Controller/ControllerZElementZ.js';
/*  */

export default class ElementZ{

    constructor(id) {
        this.id = id;
    }

    init(elementController){
        this.elementController = elementController;
    }

}
