/* Import */
import ViewZ from '/Core/Code/Element/View/ViewZ.js';
/*  */

/* Manage Routine elements */
export default class ViewzRoutineZ extends ViewZ{

/* Set properties */
    constructor() {
        super("routineZ");
        this.favorite = 1;
    }

    start(){
        super.start();
        this.timeTool = this.elementController.subscribe(this, "toolZTimeZ");
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

        let routine = this.getRoutine();
        //for(let x=0; x<3;x++){
        //    if(routine[x] != null){
        //        let d = new Date(routine[x].time);
        //        let dHr = d.getHours();
        //        let dMin = d.getMinutes();
        //        let curHr = this.timeTool.getHours();
        //        let curMin = this.timeTool.getMinutes();
        //        let present = false;
//
        //        let row = document.createElement('tr');
        //        let time = document.createElement('td');
        //        let activity = document.createElement('td');
//
        //        time.innerHTML = this.timeTool.formatTime(dHr, dMin);
        //        activity.innerHTML = routine[x].activity;
        //        row.appendChild(time);
        //        row.appendChild(activity);
        //        routineTable.appendChild(row);
//
//
        //        if((dHr == curHr && dMin < curMin)||(dHr < curHr)){
        //            if(present){ //past
        //                time.style.setProperty("background-color", this.elementController.darkColor);
        //                time.style.setProperty("color", this.elementController.mediumColor);
        //                time.style.width = "50%";
//
        //                activity.style.setProperty("background", this.elementController.mediumColor);
        //                activity.style.setProperty("color", this.elementController.darkColor);
//
        //            } else { //present
        //                present = true;
        //                time.style.setProperty("background-color", this.elementController.darkColor);
        //                time.style.setProperty("color", this.elementController.themeColor);
        //                time.style.width = "50%";
        //                time.style.borderWidth = "1px";
        //                time.style.borderStyle = "solid";
        //                time.style.borderColor = this.elementController.themeColor;
//
        //                activity.style.setProperty("background", this.elementController.themeColor);
        //                activity.style.setProperty("color", this.elementController.darkColor);
        //                activity.style.borderWidth = "1px";
        //                activity.style.borderStyle = "solid";
        //                activity.style.borderColor = this.elementController.themeColor;
        //            }
        //        } else { //future
        //            time.style.setProperty("background-color", this.elementController.darkColor);
        //            time.style.setProperty("color", this.elementController.lightColor);
        //            time.style.width = "50%";
//
        //            activity.style.setProperty("background", this.elementController.lightColor);
        //            activity.style.setProperty("color", this.elementController.darkColor);
        //            activity.style.borderWidth = "1px";
        //            activity.style.borderStyle = "solid";
        //            activity.style.borderColor = this.elementController.darkColor;
        //        }
        //    }
        //}

        //Loop backwards and find get first past time
        let present = -1;
        for(let x = (routine.length-1); x >= 0; x--){

            if(routine[x] != null){
                let d = new Date(routine[x].time);
                let dHr = d.getHours();
                let dMin = d.getMinutes();
                let cHr = this.timeTool.getHours();
                let cMin = this.timeTool.getMinutes();

                if((dHr == cHr && dMin < cMin)||(dHr < cHr)){
                    present = x;
                    break;
                }
            }
        }

        if(present != -1){ //present exists

            let pastRow = document.createElement('tr');
            let pastTime = document.createElement('td');
            let pastActivity = document.createElement('td');
            let presentRow = document.createElement('tr');
            let presentTime = document.createElement('td');
            let presentActivity = document.createElement('td');
            let futureRow = document.createElement('tr');
            let futureTime = document.createElement('td');
            let futureActivity = document.createElement('td');

            //set present element
            let d = new Date(routine[present].time);
            let dHr = d.getHours();
            let dMin = d.getMinutes();
            presentTime.innerHTML = this.timeTool.formatTime(dHr, dMin);
            presentActivity.innerHTML = routine[present].activity;

            presentTime.style.setProperty("background-color", this.elementController.darkColor);
            presentTime.style.setProperty("color", this.elementController.themeColor);
            presentTime.style.width = "50%";
            presentTime.style.borderWidth = "1px";
            presentTime.style.borderStyle = "solid";
            presentTime.style.borderColor = this.elementController.themeColor;

            presentActivity.style.setProperty("background", this.elementController.themeColor);
            presentActivity.style.setProperty("color", this.elementController.darkColor);
            presentActivity.style.borderWidth = "1px";
            presentActivity.style.borderStyle = "solid";
            presentActivity.style.borderColor = this.elementController.themeColor;

            //set past element
            if(routine[present-1] != null){
                d = new Date(routine[present-1].time);
                dHr = d.getHours();
                dMin = d.getMinutes();
                pastTime.innerHTML = this.timeTool.formatTime(dHr, dMin);
                pastActivity.innerHTML = routine[present-1].activity;

                pastTime.style.setProperty("background-color", this.elementController.darkColor);
                pastTime.style.setProperty("color", this.elementController.mediumColor);
                pastTime.style.width = "50%";

                pastActivity.style.setProperty("background", this.elementController.mediumColor);
                pastActivity.style.setProperty("color", this.elementController.darkColor);
            }

            //set future element
            if(routine[present+1] != null){
                d = new Date(routine[present+1].time);
                dHr = d.getHours();
                dMin = d.getMinutes();
                futureTime.innerHTML = this.timeTool.formatTime(dHr, dMin);
                futureActivity.innerHTML = routine[present+1].activity;

                futureTime.style.setProperty("background-color", this.elementController.darkColor);
                futureTime.style.setProperty("color", this.elementController.lightColor);
                futureTime.style.width = "50%";

                futureActivity.style.setProperty("background", this.elementController.lightColor);
                futureActivity.style.setProperty("color", this.elementController.darkColor);
                futureActivity.style.borderWidth = "1px";
                futureActivity.style.borderStyle = "solid";
                futureActivity.style.borderColor = this.elementController.darkColor;
            } else {
                //TODO: add to routine button
            }

            pastRow.appendChild(pastTime);
            pastRow.appendChild(pastActivity);
            presentRow.appendChild(presentTime);
            presentRow.appendChild(presentActivity);
            futureRow.appendChild(futureTime);
            futureRow.appendChild(futureActivity);
            routineTable.appendChild(pastRow);
            routineTable.appendChild(presentRow);
            routineTable.appendChild(futureRow);

        } else { //routine not started
            for(let x = 0; x < 3; x++){
                if(routine[x] != null){
                    let d = new Date(routine[x].time);
                    let dHr = d.getHours();
                    let dMin = d.getMinutes();
                    let row = document.createElement('tr');
                    let time = document.createElement('td');
                    let activity = document.createElement('td');
                    time.innerHTML = this.timeTool.formatTime(dHr, dMin);
                    activity.innerHTML = routine[x].activity;

                    time.style.setProperty("background-color", this.elementController.darkColor);
                    time.style.setProperty("color", this.elementController.lightColor);
                    time.style.width = "50%";

                    activity.style.setProperty("background", this.elementController.lightColor);
                    activity.style.setProperty("color", this.elementController.darkColor);
                    activity.style.borderWidth = "1px";
                    activity.style.borderStyle = "solid";
                    activity.style.borderColor = this.elementController.darkColor;

                    row.appendChild(time);
                    row.appendChild(activity);
                    routineTable.appendChild(row);
                }
            }

            if(routine.length < 3){
                //TODO: add to routine button
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
