/* Import */
import Manager from '/JS/Core/Manager.js';
/*  */

/* Manage Goal elements */
export default class GoalManager extends Manager{

/* Set properties */
    constructor() {
        //Set ID//
        super("goal");
    }

/* Update */
    /* Update Goal view */
    update(){

        //TODO: Get goals//
        //TODO: Set view//

        //Update view//
        super.update("<h1>Goals</h1>");
    }
}
/*  */
