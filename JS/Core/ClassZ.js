/* Import */
import ContentManager from '/JS/Managers/ContentManager.js';
/*  */

/* Set Properties */
const contentManager = new ContentManager(this);
/*  */

/* Update view */
window.onresize = function(event) {
    contentManager.update();
};
/*  */
