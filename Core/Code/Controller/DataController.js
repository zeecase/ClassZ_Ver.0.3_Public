/* Import */
//Core//
import ElementController from '/Core/Code/Controller/ElementController.js';
import ViewController from '/Core/Code/Controller/ViewController.js';
/*  */

const elementController = new ElementController();
const viewController = new ViewController();

/* Manage External connections */
export default class DataController{
    constructor(){
        viewController.init(this, elementController);
        elementController.init(this, viewController);
    }
}
/*  */

/* On Load */
const dataController = new DataController();

//document.addEventListener('DOMContentLoaded', function() {
//    dataController.init();
//});
/*  */
