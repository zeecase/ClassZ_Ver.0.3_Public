/* Import */
import ViewManager from '/JS/Managers/ViewManager.js';
/*  */

/* Set Properties */
const viewManager = new ViewManager(this);
/*  */

/* Update view */
window.onresize = function(event) {
    viewManager.update();
};
/*  */
