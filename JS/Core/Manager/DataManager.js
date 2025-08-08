/* Import */
//Core//
import ElementManager from '/JS/Core/Manager/ElementManager.js';
import ViewManager from '/JS/Core/Manager/ViewManager.js';
/*  */

/* Manage External connections */
export default class DataManager{
/* Set Properties */
    init(){

        //Set Screen//
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        //Set Manager//
        this.elementManager = new ElementManager(this);
        this.viewManager = new ViewManager(this);
        this.elementManager.init(this, this.viewManager);
        this.viewManager.init(this, this.elementManager);
    }

    update(){
        this.ViewManager.update();
    }
}
/*  */

/* On Load */
const dataManager = new DataManager();
document.addEventListener('DOMContentLoaded', function() {
    dataManager.init();
});
/*  */

/* Atar listeners*/
window.onresize = function(event) {
    dataManager.update();
};
/*  */
