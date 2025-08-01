/* Import */
import Manager from '/JS/Core/Manager.js';
import TimeManager from '/JS/Managers/TimeManager.js';
/*  */

/* Manage Routine elements */
export default class RoutineManager extends Manager{

/* Set properties */
    constructor(time) {

        //Set ID//
        super("routine");

        //Set defaults//
        this.time = time;
        this.routine = [];
        this.currentActivity = 0;
        this.countdownLength = 0;
        this.coutdown = 0;

        //Get time updates//
        this.time.setSubscribe(this);
    }

/* Update */
    /* Update Routine view */
    update(){

        //Get routine//
        this.routine = this.getRoutine();

        //TODO: Set view//

        //Update view//
        super.update("<h1>Routine</h1>");
     }

/* Get */
    /* Get routine */
    getRoutine() {
        //Return routine list//
        return [
            {time: "2024-11-14T15:30:00.000Z", activity: "Morning Routine"},
            {time: "2024-11-14T20:00:00.000Z", activity: "Lunch"},
            {time: "2024-11-15T06:00:00.000Z", activity: "End of Day"}
        ];
    }
}
/*  */
