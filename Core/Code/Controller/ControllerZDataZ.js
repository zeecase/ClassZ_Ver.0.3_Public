/* Import */
import ControllerZ from '/Core/Code/Controller/ControllerZ.js';
import ControllerZElementZ from '/Core/Code/Controller/ControllerZElementZ.js';
import ControllerZViewZ from '/Core/Code/Controller/ControllerZViewZ.js';
/*  */

/* Manage External connections */
export default class ControllerZDataZ extends ControllerZ{
    constructor(){
        super();
        super.init(this, new ControllerZElementZ(), new ControllerZViewZ());
        this.getViewController().init(this.getDataController(), this.getElementController());
        this.getElementController().init(this.getDataController(), this.getViewController());
    }

}
/*  */

const self = new ControllerZDataZ();

