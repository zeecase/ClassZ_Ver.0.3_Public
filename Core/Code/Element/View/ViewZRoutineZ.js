/* Import */
import ViewZ from '/Core/Code/Element/View/ViewZ.js';
/*  */

/* Manage Routine elements */
export default class ViewzRoutineZ extends ViewZ{

/* Set properties */
    constructor(elementController) {
        super(elementController);
        this.id = "routineZ";
    }

    setViewActive(){
        this.view.style.setProperty("padding-left", "25px");
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.setProperty("text-align", "left");

        let routine = this.elementController.getRoutine();
        let view = "<h1 style='text-align:center'>Routine</h1>";
        for(let x=0; x<routine.length;x++){
            let d = new Date(routine[x].time);
            //let t = this.elementController.timeToolZ.getTimeString(d.getHours(), d.getMinutes());
            let a = routine[x].activity;
            view += "<p>" + d + " -> " + a + "</p>";
        }

        this.card.appendChild(view);
    }

    setViewCollapsed(){

        this.view.style.setProperty("background-color", this.elementController.mediumColor);
        this.view.style.setProperty("color", this.elementController.lightColor);
        this.view.style.setProperty("font-size", "0.8em");
        this.view.style.setProperty("margin", "3px");
        this.view.style.setProperty("padding", "0");
        this.view.style.setProperty("overflow-wrap", "break-word");
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.setProperty("text-align", "center");

        let title = document.createElement('p');
        title.innerHTML = "RoutineZ";

        this.card.appendChild(title);
    }
}
/*  */
