/* Import */
//Core//
import ElementManager from '/Core/JS/Manager/ElementManager.js';
import ViewManager from '/Core/JS/Manager/ViewManager.js';
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
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        this.elementManager.update();
        this.viewManager.update();
    }

    getOrientetion(){
        //Get screen orientation//
        if(this.screenHeight > this.screenWidth - this.screenWidth*0.1)
            if(this.screenHeight < this.screenWidth + this.screenWidth*0.1 )
                return "square";
            else
                return "portrait";

        return "landscape";
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
