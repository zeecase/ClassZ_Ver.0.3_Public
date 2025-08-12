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
        this.title = document.createElement('p');
    }

    getElement(){

        if(this.active){
            this.style.setProperty("background", this.elementManager.mediumColor);
            this.style.setProperty("color", this.elementManager.lightColor);
            this.style.setProperty("padding", "0");
            this.style.setProperty("padding-left", "25px");
            this.style.setProperty("overflow-wrap", "break-word");
            this.style.fontFamily = "OpenDyslexic";
            this.style.setProperty("text-align", "left");
            this.style.borderRadius = '10px'; // standard
            this.style.MozBorderRadius = '10px'; // Mozilla
            this.style.WebkitBorderRadius = '10px'; // WebKit
            this.style.borderWidth = "3px";
            this.style.borderStyle = "solid";
            this.style.borderColor = this.elementManager.darkColor;

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
            this.style.setProperty("background-color", this.elementManager.mediumColor);
            this.style.setProperty("color", this.elementManager.lightColor);
            this.style.setProperty("margin", "3px");
            this.style.setProperty("padding", "0");
            this.style.setProperty("overflow-wrap", "break-word");
            this.style.fontFamily = "OpenDyslexic";
            this.style.setProperty("text-align", "center");
            this.style.borderRadius = "10px"; // standard
            this.style.MozBorderRadius = "10px"; // Mozilla
            this.style.WebkitBorderRadius = "10px"; // WebKit
            this.style.borderWidth = "3px";
            this.style.borderStyle = "solid";
            this.style.borderColor = this.elementManager.darkColor;

            let gradient = "linear-gradient(";
            if (this.elementManager.orientation == "landscape") gradient += "-9";
            gradient +=
                "0deg, " + this.elementManager.mediumColor + " 70%, " + this.elementManager.themeColor + " 100%)";
            this.board.style.setProperty("font-size", "1em");
            this.board.style.setProperty("background", gradient);
            this.board.style.setProperty("position", "absolute");
            this.board.style.setProperty("top", "0");
            this.board.style.setProperty("bottom", "0");
            this.board.style.setProperty("width", "100%");
            this.board.style.setProperty("height", "100%");
            this.board.style.setProperty("opacity", "20%");
            this.board.style.setProperty("font-size", "1em");
            this.board.style.setProperty("margin", "0");
            this.board.style.setProperty("margin-bottom", "3px");
            this.board.style.setProperty("padding", "0");
            this.board.style.setProperty("padding-top", "15px");
            this.board.style.borderRadius = "10px"; // standard
            this.board.style.MozBorderRadius = "10px"; // Mozilla
            this.board.style.WebkitBorderRadius = "10px"; // WebKit

            this.title.innerHTML = "Routine";
            this.object.appendChild(this.title);


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
