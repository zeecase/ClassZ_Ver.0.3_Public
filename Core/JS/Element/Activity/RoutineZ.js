/* Import */
import ActivityZ from '/Core/JS/Object/ActivityZ.js';
/*  */

/* Manage Routine elements */
export default class RoutineZ extends ActivityZ{

/* Set properties */
    constructor(elementManager) {
        super(elementManager);
        this.id = "routineZ";

        //Set defaults//
        this.routine = [];
        this.currentActivity = 0;

        this.board = document.createElement('p');
    }

    getElement(){

        if(this.active){
            this.style.setProperty("background", this.elementManager.lightColor);
            this.style.setProperty("padding", "0");
            this.style.setProperty("padding-left", "25px");
            this.style.setProperty("overflow-wrap", "break-word");
            this.style.fontFamily = "OpenDyslexic";
            this.style.setProperty("text-align", "left");

            this.routine = this.getRoutine();
            let view = "<h1 style='text-align:center'>Routine</h1>";
            for(let x=0; x<this.routine.length;x++){
                let d = new Date(this.routine[x].time);
                let t = this.elementManager.timeToolZ.getTimeString(d.getHours(), d.getMinutes());
                let a = this.routine[x].activity;
                view += "<p>" + t + " -> " + a + "</p>";
            }
            this.board.innerHTML = view;

            this.setViewActive();
        } else {
            this.style.setProperty("background-image", "url("+ this.elementManager.getBackgroundTexture("small") + ")");
            this.style.setProperty("padding", "0");
            this.style.setProperty("overflow-wrap", "break-word");
            this.style.fontFamily = "OpenDyslexic";
            this.style.setProperty("text-align", "center");

            this.board.style.setProperty("font-size", "1em");
            this.board.style.setProperty("margin-top", "5%");
            this.board.style.setProperty("padding", "0");

            this.board.innerHTML = "Routine";

            this.setViewCollapsed(0,0);
        }

        this.object.appendChild(this.board);
        return this.object;
    }

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
