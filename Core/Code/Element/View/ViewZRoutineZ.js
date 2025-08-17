/* Import */
import ViewZ from '/Core/Code/Element/View/ViewZ.js';
/*  */

/* Manage Routine elements */
export default class ViewzRoutineZ extends ViewZ{

/* Set properties */
    constructor(elementController) {
        super(elementController, "routineZ");

        this.timeTool = elementController.timeSubscribe(this);
    }

    updateTime(){

    }

    setViewActive(){
        this.view.style.fontFamily = "OpenDyslexic";
        this.view.style.setProperty("text-align", "center");
        this.view.style.setProperty("font-size", "0.6em");
        this.card.style.setProperty("background-color", this.elementController.darkColor);

        let routineTable = document.createElement('table');
        routineTable.style.width = "100%";
        routineTable.style.height = "100%";

        let routine = this.elementController.getRoutine();
        for(let x=0; x<routine.length;x++){
            let d = new Date(routine[x].time);
            let dHr = d.getHours();
            let dMin = d.getMinutes;
            let curHr = this.timeTool.getHours();
            let curMin = this.timeTool.getMinutes();

            if((dHr == curHr && dMin > curMin)||(dHr > curHr)){
                let rPast = document.createElement('tr');
                let rPresent = document.createElement('tr');
                let rFuture = document.createElement('tr');

                let tPast = document.createElement('td');
                let aPast = document.createElement('td');
                let tPresent = document.createElement('td');
                let aPresent = document.createElement('td');
                let tFuture = document.createElement('td');
                let aFuture = document.createElement('td');

                if(routine[x-2] != null){
                    d = new Date(routine[x-2].time);
                    tPast.innerHTML = this.timeTool.formatTime(d.getHours(), d.getMinutes());
                    aPast.innerHTML = routine[x-2].activity;
                    rPast.appendChild(tPast);
                    rPast.appendChild(aPast);
                    routineTable.appendChild(rPast);

                    tPast.style.setProperty("background-color", this.elementController.darkColor);
                    tPast.style.setProperty("color", this.elementController.mediumColor);
                    tPast.style.width = "50%";

                    aPast.style.setProperty("background", this.elementController.mediumColor);
                    aPast.style.setProperty("color", this.elementController.darkColor);
                }

                if(routine[x-1] != null){
                    d = new Date(routine[x-1].time);
                    tPresent.innerHTML = this.timeTool.formatTime(d.getHours(), d.getMinutes());
                    aPresent.innerHTML = routine[x-1].activity;
                    rPresent.appendChild(tPresent);
                    rPresent.appendChild(aPresent);
                    routineTable.appendChild(rPresent);

                    tPresent.style.setProperty("background-color", this.elementController.darkColor);
                    tPresent.style.setProperty("color", this.elementController.themeColor);
                    tPresent.style.width = "50%";
                    tPresent.style.borderWidth = "1px";
                    tPresent.style.borderStyle = "solid";
                    tPresent.style.borderColor = this.elementController.themeColor;

                    aPresent.style.setProperty("background", this.elementController.themeColor);
                    aPresent.style.setProperty("color", this.elementController.darkColor);
                    aPresent.style.borderWidth = "1px";
                    aPresent.style.borderStyle = "solid";
                    aPresent.style.borderColor = this.elementController.themeColor;
                }

                d = new Date(routine[x].time);
                tFuture.innerHTML = this.timeTool.formatTime(d.getHours(), d.getMinutes());
                aFuture.innerHTML = routine[x].activity;
                rFuture.appendChild(tFuture);
                rFuture.appendChild(aFuture);
                routineTable.appendChild(rFuture);

                tFuture.style.setProperty("background-color", this.elementController.darkColor);
                tFuture.style.setProperty("color", this.elementController.lightColor);
                tFuture.style.width = "50%";

                aFuture.style.setProperty("background", this.elementController.lightColor);
                aFuture.style.borderWidth = "1px";
                aFuture.style.borderStyle = "solid";
                aFuture.style.borderColor = this.elementController.darkColor;

                break;
            }
        }

        this.card.appendChild(routineTable);
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
