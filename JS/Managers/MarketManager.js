/* Import */
import Manager from '/JS/Core/Manager.js';
/*  */

/* Manage MarketZ elements */
export default class MarketManager extends Manager{

/* Set properties */
    constructor() {
        //Set ID//
        super("market");
    }

/* Update */
    /* Update MarketZ view */
    update(){

        //TODO: Get market//
        //TODO: Set view//

        //Update view//
        super.update("<h1>Market</h1>");
    }
}
/*  */
