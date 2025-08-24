/* Import */
import ViewZ from '/Core/Code/Element/View/ViewZ.js';
/*  */

/* Manage Routine elements */
export default class ViewzRoutineZ extends ViewZ{

/* Set properties */
    constructor(id) {
        super(id);
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
        this.card.style.setProperty("background-color", this.elementController.colors.dark);

        let routineTable = document.createElement('table');
        routineTable.style.width = "100%";
        routineTable.style.height = "100%";

        let routine = this.getRoutine();

        //Loop backwards and find get first past time
        let present = -1;
        for(let x = (routine.length-1); x >= 0; x--){

            if(routine[x] != null){
                let t = routine[x].time;
                let curHr = this.timeTool.getHours();
                let curMin = this.timeTool.getMinutes();

                if((t.hours == curHr && t.minutes < curMin)||(t.hours < curHr)){
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
            let t = routine[present].time;
            presentTime.innerHTML = this.timeTool.formatTime(t.hours, t.minutes);
            presentActivity.innerHTML = routine[present].activity;

            presentTime.style.setProperty("background-color", this.elementController.colors.dark);
            presentTime.style.setProperty("color", this.elementController.colors.theme);
            presentTime.style.width = "50%";
            presentTime.style.borderWidth = "1px";
            presentTime.style.borderStyle = "solid";
            presentTime.style.borderColor = this.elementController.colors.theme;

            presentActivity.style.setProperty("background", this.elementController.colors.theme);
            presentActivity.style.setProperty("color", this.elementController.colors.dark);
            presentActivity.style.borderWidth = "1px";
            presentActivity.style.borderStyle = "solid";
            presentActivity.style.borderColor = this.elementController.colors.theme;

            //set past element
            if(routine[present-1] != null){
                t = routine[present-1].time;
                pastTime.innerHTML = this.timeTool.formatTime(t.hours, t.minutes);
                pastActivity.innerHTML = routine[present-1].activity;

                pastTime.style.setProperty("background-color", this.elementController.colors.dark);
                pastTime.style.setProperty("color", this.elementController.colors.medium);
                pastTime.style.width = "50%";

                pastActivity.style.setProperty("background", this.elementController.colors.medium);
                pastActivity.style.setProperty("color", this.elementController.colors.dark);
            }

            //set future element
            if(routine[present+1] != null){
                t = routine[present+1].time;
                futureTime.innerHTML = this.timeTool.formatTime(t.hours, t.minutes);
                futureActivity.innerHTML = routine[present+1].activity;

                futureTime.style.setProperty("background-color", this.elementController.colors.dark);
                futureTime.style.setProperty("color", this.elementController.colors.light);
                futureTime.style.width = "50%";

                futureActivity.style.setProperty("background", this.elementController.colors.light);
                futureActivity.style.setProperty("color", this.elementController.colors.dark);
                futureActivity.style.borderWidth = "1px";
                futureActivity.style.borderStyle = "solid";
                futureActivity.style.borderColor = this.elementController.colors.dark;
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
                    let t = routine[x].time;
                    let row = document.createElement('tr');
                    let time = document.createElement('td');
                    let activity = document.createElement('td');
                    time.innerHTML = this.timeTool.formatTime(t.hours, t.minutes);
                    activity.innerHTML = routine[x].activity;

                    time.style.setProperty("background-color", this.elementController.colors.dark);
                    time.style.setProperty("color", this.elementController.colors.light);
                    time.style.width = "50%";

                    activity.style.setProperty("background", this.elementController.colors.light);
                    activity.style.setProperty("color", this.elementController.colors.dark);
                    activity.style.borderWidth = "1px";
                    activity.style.borderStyle = "solid";
                    activity.style.borderColor = this.elementController.colors.dark;

                    row.appendChild(time);
                    row.appendChild(activity);
                    routineTable.appendChild(row);
                }
            }

            if(routine.length < 3){
                //TODO: add to routine button
            }
        }

        if(routine.length > 3){
            //TODO: add stack buttons
        }

        this.card.appendChild(routineTable);
    }

    setViewCollapsed(){

        this.view.style.setProperty("background-color", this.elementController.colors.medium);
        this.view.style.setProperty("color", this.elementController.colors.light);
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

        //TODO: Return routine list - sorted past->future//

        //Default//
        return [
            {time: {hours: 6, minutes:0}, activity: "Morning Routine"},
            {time: {hours: 7, minutes:0}, activity: "Breakfast"},
            {time: {hours: 8, minutes:0}, activity: "Activity 1"},
            {time: {hours: 12, minutes:0}, activity: "Lunch"},
            {time: {hours: 13, minutes:0}, activity: "Activity 2"},
            {time: {hours: 17, minutes:0}, activity: "Dinner"},
            {time: {hours: 18, minutes:0}, activity: "Relax"},
            {time: {hours: 20, minutes:0}, activity: "Night Routine"},
            {time: {hours: 21, minutes:0}, activity: "Sleep"}
        ];
    }
}
/*  */
