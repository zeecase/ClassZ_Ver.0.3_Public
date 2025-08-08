/* Import */
import ActivityZ from '/Core/JS/Object/ActivityZ.js';
/*  */

/* Manage Routine elements */
export default class RoutineZ extends ActivityZ{

/* Set properties */
    constructor(elementManager) {
        super(elementManager, "routineZ");

        //Set defaults//
        this.routine = [];
        this.currentActivity = 0;
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
