let dataController = null;
let elementController = null;
let viewController = null;

/* Manage External connections */
export default class ControllerZ{

    constructor(){

    }

    init(data, element, view) {
        console.log("Init: "+this);
        //Set controller//
        dataController = data;
        elementController = element;
        viewController = view;
    }

    getDataController(){
        return dataController;
    }

    getElementController(){
        return elementController;
    }

    getViewController(){
        return viewController;
    }
}
/*  */
