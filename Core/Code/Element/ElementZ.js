
/* Import */
import ElementController from '/Core/Code/Controller/ElementController.js';
/*  */

export default class ElementZ{

    constructor(id) {
        this.id = id;
    }

    init(elementController){
        this.elementController = elementController;
    }

}
