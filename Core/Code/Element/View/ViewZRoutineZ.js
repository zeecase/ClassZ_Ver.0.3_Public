/* Import */
import ViewZ from '/Core/Code/Element/View/ViewZ.js';
/*  */

/* Manage Routine elements */
export default class ViewzRoutineZ extends ViewZ{

/* Set properties */
    constructor(elementManager) {
        super(elementManager);
        this.id = "routineZ";

        //Set defaults//
        this.routine = [];
        this.currentActivity = 0;
    }

    getElement(active) {
        if (active == this.id) {
            this.board.style.setProperty("background", this.elementManager.mediumColor);
            this.board.style.setProperty("color", this.elementManager.lightColor);
            this.board.style.setProperty("padding", "0");
            this.board.style.setProperty("padding-left", "25px");
            this.board.style.setProperty("overflow-wrap", "break-word");
            this.board.style.fontFamily = "OpenDyslexic";
            this.board.style.setProperty("text-align", "left");
            this.board.style.borderRadius = '10px'; // standard
            this.board.style.MozBorderRadius = '10px'; // Mozilla
            this.board.style.WebkitBorderRadius = '10px'; // WebKit
            this.board.style.borderWidth = "3px";
            this.board.style.borderStyle = "solid";
            this.board.style.borderColor = this.elementManager.darkColor;

            this.routine = this.getRoutine();
            let view = "<h1 style='text-align:center'>Routine</h1>";
            for(let x=0; x<this.routine.length;x++){
                let d = new Date(this.routine[x].time);
                let t = this.elementManager.timeToolZ.getTimeString(d.getHours(), d.getMinutes());
                let a = this.routine[x].activity;
                view += "<p>" + t + " -> " + a + "</p>";
            }

            this.card.style.setProperty("font-size", "1em");
            this.card.style.setProperty("position", "absolute");
            this.card.style.setProperty("top", "0");
            this.card.style.setProperty("bottom", "0");
            this.card.style.setProperty("width", "100%");
            this.card.style.setProperty("height", "100%");
            this.card.style.setProperty("opacity", "20%");
            this.card.style.setProperty("margin", "0");
            this.card.style.setProperty("margin-bottom", "3px");
            this.card.style.setProperty("padding", "0");
            this.card.style.setProperty("padding-top", "15px");
            this.card.style.borderRadius = "10px"; // standard
            this.card.style.MozBorderRadius = "10px"; // Mozilla
            this.card.style.WebkitBorderRadius = "10px"; // WebKit

            this.card.innerHTML = view;

            this.setViewActive();
        } else {
            this.board.style.setProperty("background-color", this.elementManager.mediumColor);
            this.board.style.setProperty("color", this.elementManager.lightColor);
            this.board.style.setProperty("font-size", "0.8em");
            this.board.style.setProperty("margin", "3px");
            this.board.style.setProperty("padding", "0");
            this.board.style.setProperty("overflow-wrap", "break-word");
            this.board.style.fontFamily = "OpenDyslexic";
            this.board.style.setProperty("text-align", "center");
            this.board.style.borderRadius = "10px"; // standard
            this.board.style.MozBorderRadius = "10px"; // Mozilla
            this.board.style.WebkitBorderRadius = "10px"; // WebKit
            this.board.style.borderWidth = "3px";
            this.board.style.borderStyle = "solid";
            this.board.style.borderColor = this.elementManager.darkColor;

            this.title.style.setProperty("margin-top", "20px");
            this.title.innerHTML = "RoutineZ";
            this.board.appendChild(this.title);


            this.setViewCollapsed(0,0);
        }

        this.board.appendChild(this.card);
        return this.board;
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
