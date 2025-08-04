/* Import */
//Core//
import DataManager from '/JS/Core/Manager/ElementManager.js';
import ViewManager from '/JS/Core/Manager/ViewManager.js';
/*  */

/* Set Properties */
const viewManager = new ViewManager();
const elementsManager = new ElementsManager();
this.screenWidth = window.innerWidth;
this.screenHeight = window.innerHeight;
/*  */


document.addEventListener('DOMContentLoaded', function() {
    viewManager.init(this, elementManager);
    elementManager.init(this, viewManager);
});

/* Update view */
window.onresize = function(event) {
    viewManager.update();
};
/*  */
